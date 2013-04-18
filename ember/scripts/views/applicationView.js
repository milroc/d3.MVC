/** Class: App.ApplictaionView
 * A simple root level application view which uses the "application" handlebar
 * template for rendering.
 */
App.ApplicationView = Ember.View.extend({
    templateName: 'application'
    ,chartValuesBinding: 'App.chartValuesController.content'
    
    /** Event Handler: generateNewChartValues(event)
     * Handles the generateNewChartValues action and triggers a regeneration of
     * the App.chartValuesController contained random chart values.
     */
    ,generateNewChartValues: function(event) {
        App.chartValuesController.replaceWithRandom();
    }
});