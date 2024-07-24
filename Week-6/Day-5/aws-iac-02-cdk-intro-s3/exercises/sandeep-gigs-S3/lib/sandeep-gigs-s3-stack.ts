import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3Deployment from "aws-cdk-lib/aws-s3-deployment";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface GigsSettings extends cdk.StackProps {
  permissionsBoundaryPolicyName: string;
  subDomain: string;
}

export class SandeepGigsS3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: GigsSettings) {
    super(scope, id, props);
    cdk.Tags.of(this).add("Name", props.stackName!);
    cdk.Tags.of(this).add("Academy", props.stackName!);

    // Set a permissions boundary
    const boundary = iam.ManagedPolicy.fromManagedPolicyName(
      this,
      "Boundary",
      props.permissionsBoundaryPolicyName
    );
    iam.PermissionsBoundary.of(this).apply(boundary);
    const flyersBucket = new s3.Bucket(this, "flyers-hosting", {
      bucketName: `${props.subDomain}-flyers-hosting`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL, // securit
      encryption: s3.BucketEncryption.S3_MANAGED, // security
    });
  }
}

