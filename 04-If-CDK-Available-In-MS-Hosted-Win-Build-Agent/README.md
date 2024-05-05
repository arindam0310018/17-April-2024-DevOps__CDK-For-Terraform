Greetings my fellow Technology Advocates and Specialists.

This is __Chapter #3__ of my Terraform CDK (Cloud Development Kit) Series.

In this Session, I will walk you through __If CDK (Cloud Development Kit) for Terraform is available in Microsoft Hosted Windows Build Agent.__

| __OBJECTIVES:-__ |
| --------- |

| __#__ | __TOPICS__ |
| --------- | --------- |
| 1. | If __Chocolatey Package Manager__ is installed in Microsoft Hosted Windows Build Agent. |
| 2. | If __Terraform__ is installed in Microsoft Hosted Windows Build Agent. If not, Pipeline will install and then validate. |
| 3. | If __Node__ is installed in Microsoft Hosted Windows Build Agent. |
| 4. | If __Yarn__ is installed in Microsoft Hosted Windows Build Agent. |
| 5. | If __CDK for Terraform__ is installed in Microsoft Hosted Windows Build Agent. If not, Pipeline will install and then validate. |

| __REQUIREMENTS:-__ |
| --------- |

1. Azure Subscription.
2. Azure DevOps Organisation and Project.
3. Service Principal with Required RBAC ( Contributor) applied on Subscription or Resource Group(s).
4. Azure Resource Manager Service Connection in Azure DevOps.

So, here goes the answer:
"No, __Terraform__ and __CDK for Terraform__ __DOES NOT__ come installed by default in __Microsoft Hosted Windows Build Agent__."

| PIPELINE CODE SNIPPET:- | 
| --------- |

| AZURE DEVOPS YAML PIPELINE (azure-pipelines-with-CDK-For-Terraform-Win-v1.0.yml):- |
| --------- |

```
trigger:
  none

######################
#DECLARE VARIABLES:-
######################
variables:
  ServiceConnection: amcloud-cicd-service-connection
  BuildAgent_Win: windows-latest
  envName: NonProd

#########################
# Declare Build Agents:-
#########################
pool:
  vmImage: $(BuildAgent_Win)

###################
# Declare Stages:-
###################

stages:

- stage: TEST_CDK_FOR_TERRAFORM_ON_WINDOWS 
  jobs:
  - job: TEST_CDK_FOR_TERRAFORM_ON_WINDOWS 
    displayName: TEST CDK FOR TERRAFORM ON WINDOWS
    steps:

##################################################
# Test CDK for Terraform in Windows Build Agent:-
##################################################
    - task: AzureCLI@2
      displayName: Test CDK for Terraform on Windows
      inputs:
        azureSubscription: $(ServiceConnection)
        scriptType: ps
        scriptLocation: inlineScript
        inlineScript: |
          echo "##########################################################"
          $choco_ver = choco -v
          echo "The latest chocolatey version installed is: $choco_ver"
          echo "##########################################################"
          
          echo "Terraform is NOT INSTALLED!."
          echo " Proceed to installation..."
          echo "##########################################################"
          choco install terraform -y
          $tf_validate_install = terraform -v
          echo "##########################################################"
          echo "The latest terraform version installed is: $tf_validate_install"
          echo "##########################################################"
          
          $node_ver = node --version
          echo "The latest node version installed is: $node_ver"
          echo "##########################################################"
          
          $yarn_ver = yarn --version
          echo "The latest yarn version installed is: $yarn_ver"
          echo "##########################################################"
          
          echo "CDK for Terraform is NOT INSTALLED!."
          echo "Proceed to installation..."
          npm install --global cdktf-cli@latest
          npm install @cdktf/provider-azurerm
          echo "##########################################################"
          $cdktf_validate_install = cdktf --version
          echo "The latest cdktf version installed is: $cdktf_validate_install"
          echo "##########################################################"

```

Now, let me explain each part of YAML Pipeline for better understanding.

| PART #1:- | 
| --------- |

| BELOW FOLLOWS PIPELINE VARIABLES CODE SNIPPET:- | 
| --------- |

```
######################
#DECLARE VARIABLES:-
######################
variables:
  ServiceConnection: amcloud-cicd-service-connection
  BuildAgent_Win: windows-latest
  envName: NonProd

```

| NOTE:- | 
| --------- |
| 1. Please change the values of the variables accordingly. |
| 2. The entire YAML pipeline is build using Variables. No Values are Hardcoded. |

| PART #2:- | 
| --------- |

| This is a Single Stage Pipeline - TEST_CDK_FOR_TERRAFORM_ON_WINDOWS (with 1 Pipeline Task):- | 
| --------- |

```
###################
# Declare Stages:-
###################

stages:

- stage: TEST_CDK_FOR_TERRAFORM_ON_WINDOWS 
  jobs:
  - job: TEST_CDK_FOR_TERRAFORM_ON_WINDOWS 
    displayName: TEST CDK FOR TERRAFORM ON WINDOWS
    steps:

```

| PIPELINE TASK #1:-:- | 
| --------- |
| 1. Validate __Chocolatey Package Manager__. |
| 2. Install and validate __Terraform__. |
| 3. Validate __Node__. |
| 4. Validate __Yarn__. |
| 5. Install and validate __CDK for Terraform__. |


```
##################################################
# Test CDK for Terraform in Windows Build Agent:-
##################################################
    - task: AzureCLI@2
      displayName: Test CDK for Terraform on Windows
      inputs:
        azureSubscription: $(ServiceConnection)
        scriptType: ps
        scriptLocation: inlineScript
        inlineScript: |
          echo "##########################################################"
          $choco_ver = choco -v
          echo "The latest chocolatey version installed is: $choco_ver"
          echo "##########################################################"
          
          echo "Terraform is NOT INSTALLED!."
          echo " Proceed to installation..."
          echo "##########################################################"
          choco install terraform -y
          $tf_validate_install = terraform -v
          echo "##########################################################"
          echo "The latest terraform version installed is: $tf_validate_install"
          echo "##########################################################"
          
          $node_ver = node --version
          echo "The latest node version installed is: $node_ver"
          echo "##########################################################"
          
          $yarn_ver = yarn --version
          echo "The latest yarn version installed is: $yarn_ver"
          echo "##########################################################"
          
          echo "CDK for Terraform is NOT INSTALLED!."
          echo "Proceed to installation..."
          npm install --global cdktf-cli@latest
          npm install @cdktf/provider-azurerm
          echo "##########################################################"
          $cdktf_validate_install = cdktf --version
          echo "The latest cdktf version installed is: $cdktf_validate_install"
          echo "##########################################################"

```

__NOW ITS TIME TO TEST!!!__

| TEST CASES:- | 
| --------- |
| 1. Pipeline executed successfully. |
| ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qo7287ih5bi685eut6jt.jpg) |
| 2. Terraform Installed and Validated Successfully. |
| 3. Node and Yarn version validated Successfully. |
| 4. CDK for Terraform Installed and Validated Successfully. |
| ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kaim9p8zg5bxwdkzot97.jpg) |

__Hope You Enjoyed the Session!!!__

__Stay Safe | Keep Learning | Spread Knowledge__