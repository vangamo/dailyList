DailyListApp = {
	"DiaryView": {}
};

DailyListApp.DiaryView = {
	 "currentDayItems": []
    ,"currentDay": Date.today()

	,"init": function() {
		this.bindDeviceEvents();

		window.setTimeout( function() { document.getElementById('deviceready').style.display='none'; }, 2000 );

		this.currentDay.setTimezoneOffset( new Date().toString().substr(new Date().toString().indexOf('GMT')+3, 3) );
        this.currentDay.clearTime();


        var totalHeight = $('.diary').height();
        var lineHeight  = $('.itemList').height();

        while( $('#background-list .itemList').length != Math.floor( totalHeight/lineHeight ) ) {
            if( $('#background-list .itemList').length < Math.floor( totalHeight/lineHeight ) ) {
                $('#background-list').append( $('<div></div>').addClass('itemList') );
                }
            else {
                $('#background-list .itemList').first().remove()
                }
            }  //  END while
		}  // END method init()

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    ,"bindDeviceEvents": function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    	}
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    ,"onDeviceReady": function() {
        DailyListApp.DiaryView.receivedEvent('deviceready');
    	}
    // Update DOM on a Received Event
    ,"receivedEvent": function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    	}
	};

$(function () {
	DailyListApp.DiaryView.init();
	});