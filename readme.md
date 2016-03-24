# aws-swagger-cli [![Build Status](https://travis-ci.org/SamVerschueren/aws-swagger-cli.svg?branch=master)](https://travis-ci.org/SamVerschueren/aws-swagger-cli)

> AWS Swagger import cli


## Install

```
$ npm install --global aws-swagger-cli
```


## Usage

```
$ aws-swagger --help

  Usage
    $ aws-swagger [action] [file]

  Options
    --name     The name of the API Gateway
    --profile  The local AWS profile
    --region   The AWS region [Default: us-west-1]

  Examples
    $ aws-swagger import swagger.json --name=gateway-name --profile=local-aws-profile
```


## Related

- [api-swagger-import](https://github.com/SamVerschueren/aws-swagger-import) - API for this module


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)
