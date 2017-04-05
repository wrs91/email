define(function(require,exports,module){
    "use stirct";
    var $ = require("jquery"),
        doc = $(document),
        config = require("config"),
        _scanEventsMap = function(maps,isOn){
            var deleageEventSplitter = /^(\S+)\s*(.*)$/,
                bind = isOn ? _delegate : _undelegate;
            for(var key in maps){
                if(maps.hasOwnProperty(key)){
                    var matchs = key.match(deleageEventSplitter);
                    bind(matchs[1],match[2],maps[key]);
                }
            }
        },
        _delegate = function(name,selector,func){
            doc.on(name,selector,func);
        },
        _undelegate = function(name,selector,func){
            doc.off(name,selector,func);
        },
        base = {
            /*"initializeElements" : function(){
                var eles = config.elements;
                for(var ele in eles){
                    if(eles.hasOwnProperty(ele)){

                    }
                }
            },*/
            bindEvent : function(){
                _scanEventsMap(config.eventsMap,true);
            },
            unbindEvent : function(){
                _scanEventsMap(config.eventsMap);
            },
            destroy : function(){
                unbindEvent();
            }
        };



        module.exports = base;
});