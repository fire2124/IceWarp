provider "aws" {
  region = "us-west-2"  
}

resource "aws_instance" "docker_instance" {
  ami           = "ami-0c55b159cbfafe1f0"  
  instance_type = "t2.micro"             

  tags = {
    Name = "Docker_Instance"
  }

  user_data = <<-EOF
              #!/bin/bash
              sudo yum update -y
              sudo yum install -y docker
              sudo service docker start
              sudo usermod -a -G docker ec2-user
              sudo docker build -t node_app /path/to/your/dockerfile/directory
              sudo docker run -d -p 3000:3000 --name my_node_app node_app
              EOF
}

output "public_ip" {
  value = aws_instance.docker_instance.public_ip
}
