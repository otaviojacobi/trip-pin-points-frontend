mkdir ~/.aws
touch ~/.aws/config
chmod 600 ~/.aws/config
echo "[default]" > ~/.aws/config
echo "aws_access_key_id = $AWS_ACCESS_KEY_ID" >> ~/.aws/config
echo "aws_secret_access_key = $AWS_SECRET_ACCESS_KEY" >> ~/.aws/config
cp ~/.aws/config ~/.aws/credentials
aws s3 cp /tmp/travisci-*.zip s3://elasticbeanstalk-sa-east-1-877463950700/
aws elasticbeanstalk create-application-version --region sa-east-1 --application-name "trip-pin-points-frontend" --version-label `cat /tmp/version` --source-bundle S3Bucket="elasticbeanstalk-sa-east-1-877463950700",S3Key="travisci-`cat /tmp/version`.zip"