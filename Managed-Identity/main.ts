import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AzurermProvider } from "./.gen/providers/azurerm/provider";
import { UserAssignedIdentity } from "./.gen/providers/azurerm/user-assigned-identity";

class AMCDKInfra extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AzurermProvider(this, "AzureRm", {
      features: {},
    });
    
  let loga = new UserAssignedIdentity(this, "umid-example", {
        name: "am-cdk-umid",
        location: "westeurope",
        resourceGroupName: "am-cdk-rg",
      })
}
}

const amapp = new App();
new AMCDKInfra(amapp, "cdkumid");
amapp.synth();
