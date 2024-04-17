import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AzurermProvider } from "./.gen/providers/azurerm/provider";
import { LogAnalyticsWorkspace } from "./.gen/providers/azurerm/log-analytics-workspace";

class AMCDKInfra extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AzurermProvider(this, "AzureRm", {
      features: {},
    });
      
  let loga = new LogAnalyticsWorkspace(this, "loga-example", {
      name: "am-cdk-loga",
      location: "westeurope",
      resourceGroupName: "am-cdk-rg",
      sku: "PerGB2018",
      retentionInDays: 30
    })
  
}
}

const amapp = new App();
new AMCDKInfra(amapp, "cdkloga");
amapp.synth();
