import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "product_upload",
  name: "product_upload",
  icon: "fa fa-vine",
  autoEnable: true,
  registry: [
    {
      /*route: "closet/:userId",
      name: "closet",
      template: "closet",
      workflow: "coreWorkflow"*/
    }
  ],
  layout: [{
    layout: "coreLayout",
    workflow: "coreWorkflow",
    theme: "default",
    enabled: true,
    structure: {
      template: "customHomePageTemplate",
      layoutHeader: "customHeader",
      layoutFooter: "footer",
      notFound: "notFound",
      dashboardHeader: "",
      dashboardControls: "dashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }]
});