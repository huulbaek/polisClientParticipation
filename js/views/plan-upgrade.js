var View = require("../view");
var template = require("../tmpl/plan-upgrade");

module.exports = View.extend({
  name: "planUpgrade",
  template: template,
  events: {
  },
  initialize: function(options){
    this.plan_id = options.plan_id;
    this.plan_amount = 1;
    this.isPlanIndividuals = "individuals" === this.plan_id;
    this.isPlanSites = "sites" === this.plan_id;
    this.isPlanOrgs = "orgs" === this.plan_id;
    this.plan_name = {
      individuals: "Subscribe to \"Individual\" plan",
      sites: "Subscribe to \"Sites\" plan",
      orgs: "Subscribe to \"Orgs\" plan",
      mike: "Subscribe to \"Mike\" plan",
    }[this.plan_id];

    this.plan_amount = {
      individuals: 100*100,
      sites: 1000*100,
      // orgs:
    }[this.plan_id];

    this.stripeKey = /localhost/.test(document.domain) ? "pk_test_LtZf0dmw98aL3BV3meSuvc8Q" : "pk_live_OqP5AaF2RnMKNgCiltF6VT6x";
  }
});