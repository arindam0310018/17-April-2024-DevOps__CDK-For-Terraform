# Terraform CDK Series with Azure:-

| __TERRAFORM CDK (CLoud Developement Kit):-__ |
| --------- |
| ![image](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/79e92840-00b2-4f91-8638-5d49ec3205c5) |

| __DETAILS:-__ |
| --------- |
| 1. Language used here is __TYPESCRIPT__ |
| 2. Browse to each folder (for example - Resource-Group) and look for "main.ts" for the TypeScript Code. |

| __PRE-REQUISITES:-__ |
| --------- |
| 1. Install Terraform. |
| ![1](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/57cae5d7-30cb-4581-a61e-98c4ec6d1ba2) |
| If Required, Upgrade Terraform Version with Chocolatey Package Manager. |
| ![2](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/2e5ef309-b575-44b4-9ac8-1613fcc604c4) |
| 2. Install Node and Yarn|
| ![3](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/7db41ead-754c-4890-9f67-0af346e85848) |
| 3. Install CDKTF |
| ![4](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/ceee040c-b40e-436d-b48c-cd4c7b9ddef2) |
| Verify CDKTF Installation |
| ![5](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/ed227e5f-7141-4e02-ae44-122c9f6924b6) |
| ![6](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/52798629-d47b-4ecf-b837-b438afbb0525) |

| __LOCAL DIRECTORY STRUCTURE FOR CODE REPOSITORY:-__ |
| --------- |
| ![7](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/1320ac9f-4f16-47ab-b1ca-c2ab94ecdf37) |

| __INITIALIZE TERRAFORM CDK LOCALLY:-__ |
| --------- |
| ![8](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/dd8f4c0e-3575-4210-8700-55f32fd43dc9) |
| ![9](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/a4b2f868-60db-4b18-82e7-3f6d3981845a) |

| __FILES AND FOLDERS CREATED AFTER TERRAFORM CDK INITIALIZATION:-__ |
| --------- |
| ![10](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/e2bd5f52-9786-4223-b4ab-0e681b87e52d) |

| __OUTPUT OF CDKTF SYNTH:-__ |
| --------- |
| ![All-Issue-Resolved-CDKTF-SYNTH](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/d7819cb9-f9a3-49df-9519-14c88e8a6b39) |

| __OUTPUT OF CDKTF DEPLOY:-__ |
| --------- |
| ![CDKTF-Deploy](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/79e8b826-69a5-40cb-85d4-460e6c0200f1) |


| __TROUBLESHOOTING:-__ |
| --------- |

| __ERROR #1:-__ |
| --------- |
| ![Err-1](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/be549aa6-f5b9-4f16-b9f2-4c3908d14abf) |
| __RESOLUTION:-__ |
| The Correct Command is - cdktf init --template=typescript --local |

| __ERROR #2:-__ |
| --------- |
| ![Err-2](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/23ea7fb1-c30b-433b-a363-4e40c6f6578b) |
| __RESOLUTION:-__ |
| In the Sytem from where you are executing terraform CDK commands, browse to "C:\Program Files\nodejs" |
| Edit the below files, mentioned in the screenshot as per the link - https://stackoverflow.com/questions/72401421/message-npm-warn-config-global-global-local-are-deprecated-use-loc |
| ![image](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/880a1eb0-66b5-4108-895c-cd17a37a5364) |

| __ERROR #3:-__ |
| --------- |
| ![Err-3](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/4833cfc2-c246-424a-9d10-10d870d62008) |
| __RESOLUTION:-__ |
| Follow the Resolution provided in the link - https://flaviocopes.com/typescript-disable-declared-never-read/ |
| ![tsconfig-json](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/9d071a85-b795-4f6d-9c39-4465af5cd983) |

| __ERROR #4:-__ |
| --------- |
| ![Err-4](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/93054daa-2430-4df8-8316-a85112abb76b) |
| __RESOLUTION:-__ |
| Close Parenthesis was missing in the code snippet. |

| __ERROR #5:-__ |
| --------- |
| ![Err-5](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/46879021-f44d-4b8d-a442-4d3d670a1b4f) |
| __RESOLUTION:-__ |
| Below Code block was missing. |

```
new AzurermProvider(this, "AzureRm", {
      features: {},
    });
```

| __ERROR #6:-__ |
| --------- |
| ![Err-cdktf-deploy-1](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/f0e71c68-adcd-4891-b629-af4a6f1fb1bb) |
| __RESOLUTION:-__ |
| The Refresh token has expired due to inactivity. We need to execute "az login" command. |
| ![az-login](https://github.com/arindam0310018/15-April-2024-DevOps__Terraform-CDK/assets/29681063/3cc29c04-e17d-45e4-be57-635cc77c2e4f) |



