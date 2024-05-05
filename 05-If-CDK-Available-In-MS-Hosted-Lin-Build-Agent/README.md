Greetings my fellow Technology Advocates and Specialists.

This is __Chapter #4__ of my Terraform CDK (Cloud Development Kit) Series.

In this Session, I will walk you through __If CDK (Cloud Development Kit) for Terraform is available in Microsoft Hosted Linux Build Agent.__

| __OBJECTIVES:-__ |
| --------- |

| __#__ | __TOPICS__ |
| --------- | --------- |
| 1. | If __Terraform__ is installed in Microsoft Hosted Linux Build Agent. If not, Pipeline will install and then validate. |
| 2. | If __Node__ is installed in Microsoft Hosted Linux Build Agent. |
| 3. | If __Yarn__ is installed in Microsoft Hosted Linux Build Agent. |
| 4. | If __CDK for Terraform__ is installed in Microsoft Hosted Linux Build Agent. If not, Pipeline will install and then validate. |

| __REQUIREMENTS:-__ |
| --------- |

1. Azure Subscription.
2. Azure DevOps Organisation and Project.
3. Service Principal with Required RBAC ( Contributor) applied on Subscription or Resource Group(s).
4. Azure Resource Manager Service Connection in Azure DevOps.

So, here goes the answer:
"No, __Terraform__ and __CDK for Terraform__ __DOES NOT__ come installed by default in __Microsoft Hosted Linux Build Agent__."

| PIPELINE CODE SNIPPET:- | 
| --------- |

| AZURE DEVOPS YAML PIPELINE (azure-pipelines-with-CDK-For-Terraform-Lin-v1.0.yml):- |
| --------- |

```
trigger:
  none

######################
#DECLARE VARIABLES:-
######################
variables:
  ServiceConnection: amcloud-cicd-service-connection
  BuildAgent_Lin: ubuntu-latest
  envName: NonProd

#########################
# Declare Build Agents:-
#########################
pool:
  vmImage: $(BuildAgent_Lin)

###################
# Declare Stages:-
###################

stages:

- stage: TEST_CDK_FOR_TERRAFORM_ON_LINUX
  jobs:
  - job: TEST_CDK_FOR_TERRAFORM_ON_LINUX 
    displayName: TEST CDK FOR TERRAFORM ON LINUX
    steps:

##################################################
# Test CDK for Terraform in Linux Build Agent:-
##################################################
    - task: AzureCLI@2
      displayName: Test CDK for Terraform on Linux
      inputs:
        azureSubscription: $(ServiceConnection)
        scriptType: pscore
        scriptLocation: inlineScript
        inlineScript: |
          echo "Terraform is NOT INSTALLED!."
          echo " Proceed to installation..."
          echo "##########################################################"
          wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
          echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
          sudo apt update && sudo apt install terraform
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
  BuildAgent_Lin: ubuntu-latest
  envName: NonProd

```

| NOTE:- | 
| --------- |
| 1. Please change the values of the variables accordingly. |
| 2. The entire YAML pipeline is build using Variables. No Values are Hardcoded. |

| PART #2:- | 
| --------- |

| This is a Single Stage Pipeline - TEST_CDK_FOR_TERRAFORM_ON_LINUX (with 1 Pipeline Task):- | 
| --------- |

```
stages:

- stage: TEST_CDK_FOR_TERRAFORM_ON_LINUX
  jobs:
  - job: TEST_CDK_FOR_TERRAFORM_ON_LINUX 
    displayName: TEST CDK FOR TERRAFORM ON LINUX
    steps:
```

| PIPELINE TASK #1:-:- | 
| --------- |
| 1. Install and validate __Terraform__. |
| 2. Validate __Node__. |
| 3. Validate __Yarn__. |
| 4. Install and validate __CDK for Terraform__. |


```
##################################################
# Test CDK for Terraform in Linux Build Agent:-
##################################################
    - task: AzureCLI@2
      displayName: Test CDK for Terraform on Linux
      inputs:
        azureSubscription: $(ServiceConnection)
        scriptType: pscore
        scriptLocation: inlineScript
        inlineScript: |
          echo "Terraform is NOT INSTALLED!."
          echo " Proceed to installation..."
          echo "##########################################################"
          wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
          echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
          sudo apt update && sudo apt install terraform
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
| ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4yoe4ewq3aplwhxlqjn1.jpg) |
| 2. Terraform Installed and Validated Successfully on MS Hosted Linux Build Agent. |
| 3. Node and Yarn version validated Successfully on MS Hosted Linux Build Agent. |
| 4. CDK for Terraform Installed and Validated Successfully on MS Hosted Linux Build Agent. |
| ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/plqawzdl0vftir252ws9.jpg) |

__Hope You Enjoyed the Session!!!__

__Stay Safe | Keep Learning | Spread Knowledge__