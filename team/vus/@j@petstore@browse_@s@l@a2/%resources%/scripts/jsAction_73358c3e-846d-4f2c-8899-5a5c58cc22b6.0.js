// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var GPA_StoreExt = context.variableManager.getValue("GatewayPingAverage");
if (GPA_StoreExt==null) {
        context.fail("Variable 'GPA_StoreExt' not found");
}
logger.debug("GPA_StoreExt="+GPA_StoreExt);

// Inject the computed value in a runtime variable
context.variableManager.setValue("GPA_StoreParam",GPA_StoreExt);
