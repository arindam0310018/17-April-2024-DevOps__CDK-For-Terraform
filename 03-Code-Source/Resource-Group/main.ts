import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AzurermProvider } from "./.gen/providers/azurerm/provider";
import { ResourceGroup } from "./.gen/providers/azurerm/resource-group";

class AMCDKInfra extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AzurermProvider(this, "AzureRm", {
      features: {},
    });
    
  let rg = new ResourceGroup(this, "rg-example", {
      name: "am-cdk-rg",
      location: "westeurope"
    })
}
}
const amapp = new App();
new AMCDKInfra(amapp, "Resource-Group");
amapp.synth();
