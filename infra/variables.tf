variable "S3_bucket_name_to_app" {
  type    = string
  default = "s3://my-aws-code-bucket/IceWarp.zip"
  description = "Name to s3 bucket of our app in zip file"
}

variable "key_name" {
  default = "AKIAXEUVNQ2WBUBNCFES"
  description = "Name of the SSH key pair"
}