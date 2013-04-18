bll.lineChartValuesController = Ember.ArrayController.extend({
    content: [],

    init: function init() {
      this.replaceWithRandom();
    },

    /** Method: replaceWithRandom
     * Replaces the content of this ArrayController with randomly
     * generated values. Each object in the content array will have
     * the following structure:
     * { timestamp: [int], value: [int] }
     */
    replaceWithRandom: function replaceWithRandom() {
      var newContent = [];
      var max = 100;
      for(var i = 0, l = 100; i < l; i++) {
        var item = Ember.Object.create({
            timestamp: i
              ,value: max/2+Math.sin(i)*Math.ceil((max/2.5)*Math.random())
        });
          
        newContent[i] = item;
      }        
      this.set('content', newContent);
    }
});
