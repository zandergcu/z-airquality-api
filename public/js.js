$( document ).ready(function() {

  var app = new Vue({
    el: "#app",
    data: {
      isVueWorking: true,
      loading: false,
      submitted: false,
      locations: [],
      xcoordinates: [],
      ycoordinates: [],
      all: []
    },
    methods: {
      doSomething: function(){
        const url = "https://uk-air.defra.gov.uk/sos-ukair/api/v1/stations";
        app.loading = true;
        axios.get(url)
          .then(function (res) {
            app.loading = false;
            app.submitted = true;
            for( i=0; i<100; i++){
              app.locations[i] = res.data[i].properties.label;
              app.xcoordinates[i] = res.data[i].geometry.coordinates[0];
              app.ycoordinates[i] = res.data[i].geometry.coordinates[1];
              app.all[i] = [app.locations[i], app.xcoordinates[i], app.ycoordinates[i]]
            }

        })
        .catch(function (error) {
          app.error = true;
        })
      },
      errorFalse: function(){ // Turn Error Back to False
        app.error = false;
      }
    }
  });
});
