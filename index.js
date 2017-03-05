#!/usr/bin/node

// MUST LF

const http = require('http')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const commander = require('commander')
const mime = require('mime')

const AliyunUtils = require('aliyun-utils')

commander.version(process.version)
    .option('-l --local-path [cwd]', 'Local path', process.cwd())
    .option('-b --bucket [name]', 'Bucket name', '')
    .option('-k --key [key]', 'Root key', '')
    .option('-r --region [oss-cn-shenzhen]', 'OSS region', 'oss-cn-shenzhen')
    .option('-i --access-key-id [empty]', 'Access key ID', '')
    .option('-s --access-key-secret [empty]', 'Access key secret', '')

commander.localPath = path.normalize(commander.localPath)

