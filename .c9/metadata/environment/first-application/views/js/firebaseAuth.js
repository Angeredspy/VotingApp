{"filter":false,"title":"firebaseAuth.js","tooltip":"/first-application/views/js/firebaseAuth.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":29,"column":3},"end":{"row":42,"column":17},"action":"remove","lines":[" var user = firebase.auth().currentUser","    ","    console.log(user)","                if (user){","                      document.getElementById('google-signin')","                    .setAttribute('style','display:none; visibility: hidden')","                        document.getElementById('signout')","                    .setAttribute('style','display:inline-block; visibility: visible')","                } else {","                  document.getElementById('google-signin')","                    .setAttribute('style','display:inline-block; visibility: visible')","                    document.getElementById(signout)","                    .setAttribute('style', 'display:none; visibility:hidden ')","                }"],"id":265},{"start":{"row":29,"column":2},"end":{"row":29,"column":3},"action":"remove","lines":[" "]},{"start":{"row":29,"column":1},"end":{"row":29,"column":2},"action":"remove","lines":[" "]},{"start":{"row":29,"column":0},"end":{"row":29,"column":1},"action":"remove","lines":[" "]},{"start":{"row":28,"column":4},"end":{"row":29,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"remove","lines":["    "],"id":266},{"start":{"row":27,"column":7},"end":{"row":28,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":28,"column":1},"end":{"row":30,"column":6},"action":"remove","lines":["  window.onload = function() {","       checkIfLoggedIn()","   }  "],"id":267},{"start":{"row":28,"column":0},"end":{"row":28,"column":1},"action":"remove","lines":[" "]},{"start":{"row":27,"column":7},"end":{"row":28,"column":7},"action":"remove","lines":["","       "]}],[{"start":{"row":27,"column":7},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":268},{"start":{"row":28,"column":0},"end":{"row":28,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":15,"column":37},"end":{"row":15,"column":38},"action":"insert","lines":["'"],"id":269}],[{"start":{"row":15,"column":45},"end":{"row":15,"column":46},"action":"insert","lines":["'"],"id":270}],[{"start":{"row":20,"column":2},"end":{"row":23,"column":4},"action":"remove","lines":[" .catch(function(error){","        console.log(error)","    })","    "],"id":271}],[{"start":{"row":20,"column":1},"end":{"row":20,"column":2},"action":"remove","lines":[" "],"id":272},{"start":{"row":20,"column":0},"end":{"row":20,"column":1},"action":"remove","lines":[" "]},{"start":{"row":19,"column":3},"end":{"row":20,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":18,"column":7},"end":{"row":18,"column":8},"action":"insert","lines":[" "],"id":273}],[{"start":{"row":1,"column":39},"end":{"row":1,"column":52},"action":"remove","lines":["function(user"],"id":274}],[{"start":{"row":1,"column":40},"end":{"row":1,"column":41},"action":"remove","lines":["{"],"id":275}],[{"start":{"row":1,"column":40},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":276},{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["    "]},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["."]}],[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["t"],"id":277},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["h"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["e"]},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["n"]}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":11},"action":"insert","lines":["()"],"id":278}],[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["f"],"id":279},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["u"]},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["n"]},{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["c"]},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["t"]},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["i"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["o"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["n"]}],[{"start":{"row":2,"column":18},"end":{"row":2,"column":20},"action":"insert","lines":["()"],"id":280}],[{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["u"],"id":281},{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["s"]},{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":["e"]},{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"remove","lines":[")"],"id":282}],[{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["{"],"id":283}],[{"start":{"row":4,"column":12},"end":{"row":4,"column":41},"action":"remove","lines":["console.log('User signed in')"],"id":284},{"start":{"row":4,"column":8},"end":{"row":4,"column":12},"action":"remove","lines":["    "]},{"start":{"row":4,"column":4},"end":{"row":4,"column":8},"action":"remove","lines":["    "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"remove","lines":["    "]},{"start":{"row":3,"column":19},"end":{"row":4,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"remove","lines":["            console.log( 'User not signed in')",""],"id":285},{"start":{"row":10,"column":16},"end":{"row":11,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":10,"column":16},"end":{"row":10,"column":28},"action":"remove","lines":["            "],"id":286},{"start":{"row":10,"column":16},"end":{"row":11,"column":0},"action":"insert","lines":["",""]},{"start":{"row":11,"column":0},"end":{"row":11,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":18,"column":3},"end":{"row":18,"column":4},"action":"insert","lines":["."],"id":287},{"start":{"row":18,"column":4},"end":{"row":18,"column":5},"action":"insert","lines":["c"]},{"start":{"row":18,"column":5},"end":{"row":18,"column":6},"action":"insert","lines":["a"]},{"start":{"row":18,"column":6},"end":{"row":18,"column":7},"action":"insert","lines":["t"]},{"start":{"row":18,"column":7},"end":{"row":18,"column":8},"action":"insert","lines":["c"]},{"start":{"row":18,"column":8},"end":{"row":18,"column":9},"action":"insert","lines":["h"]}],[{"start":{"row":18,"column":9},"end":{"row":18,"column":10},"action":"insert","lines":[" "],"id":288}],[{"start":{"row":18,"column":10},"end":{"row":18,"column":12},"action":"insert","lines":["()"],"id":289}],[{"start":{"row":18,"column":11},"end":{"row":18,"column":12},"action":"insert","lines":["f"],"id":290},{"start":{"row":18,"column":12},"end":{"row":18,"column":13},"action":"insert","lines":["u"]},{"start":{"row":18,"column":13},"end":{"row":18,"column":14},"action":"insert","lines":["n"]},{"start":{"row":18,"column":14},"end":{"row":18,"column":15},"action":"insert","lines":["c"]},{"start":{"row":18,"column":15},"end":{"row":18,"column":16},"action":"insert","lines":["t"]},{"start":{"row":18,"column":16},"end":{"row":18,"column":17},"action":"insert","lines":["i"]},{"start":{"row":18,"column":17},"end":{"row":18,"column":18},"action":"insert","lines":["o"]},{"start":{"row":18,"column":18},"end":{"row":18,"column":19},"action":"insert","lines":["n"]}],[{"start":{"row":18,"column":19},"end":{"row":18,"column":21},"action":"insert","lines":["()"],"id":291}],[{"start":{"row":18,"column":20},"end":{"row":18,"column":21},"action":"insert","lines":["r"],"id":292}],[{"start":{"row":18,"column":20},"end":{"row":18,"column":21},"action":"remove","lines":["r"],"id":293}],[{"start":{"row":18,"column":20},"end":{"row":18,"column":21},"action":"insert","lines":["e"],"id":294},{"start":{"row":18,"column":21},"end":{"row":18,"column":22},"action":"insert","lines":["r"]},{"start":{"row":18,"column":22},"end":{"row":18,"column":23},"action":"insert","lines":["r"]},{"start":{"row":18,"column":23},"end":{"row":18,"column":24},"action":"insert","lines":["o"]},{"start":{"row":18,"column":24},"end":{"row":18,"column":25},"action":"insert","lines":["r"]}],[{"start":{"row":18,"column":26},"end":{"row":18,"column":28},"action":"insert","lines":["{}"],"id":295}],[{"start":{"row":18,"column":27},"end":{"row":20,"column":3},"action":"insert","lines":["","       ","   "],"id":296}],[{"start":{"row":19,"column":7},"end":{"row":19,"column":8},"action":"insert","lines":["c"],"id":297},{"start":{"row":19,"column":8},"end":{"row":19,"column":9},"action":"insert","lines":["o"]},{"start":{"row":19,"column":9},"end":{"row":19,"column":10},"action":"insert","lines":["n"]},{"start":{"row":19,"column":10},"end":{"row":19,"column":11},"action":"insert","lines":["s"]},{"start":{"row":19,"column":11},"end":{"row":19,"column":12},"action":"insert","lines":["o"]},{"start":{"row":19,"column":12},"end":{"row":19,"column":13},"action":"insert","lines":["l"]},{"start":{"row":19,"column":13},"end":{"row":19,"column":14},"action":"insert","lines":["e"]},{"start":{"row":19,"column":14},"end":{"row":19,"column":15},"action":"insert","lines":["."]},{"start":{"row":19,"column":15},"end":{"row":19,"column":16},"action":"insert","lines":["l"]},{"start":{"row":19,"column":16},"end":{"row":19,"column":17},"action":"insert","lines":["o"]},{"start":{"row":19,"column":17},"end":{"row":19,"column":18},"action":"insert","lines":["g"]}],[{"start":{"row":19,"column":18},"end":{"row":19,"column":20},"action":"insert","lines":["()"],"id":298}],[{"start":{"row":19,"column":19},"end":{"row":19,"column":20},"action":"insert","lines":["e"],"id":299},{"start":{"row":19,"column":20},"end":{"row":19,"column":21},"action":"insert","lines":["r"]},{"start":{"row":19,"column":21},"end":{"row":19,"column":22},"action":"insert","lines":["r"]},{"start":{"row":19,"column":22},"end":{"row":19,"column":23},"action":"insert","lines":["o"]},{"start":{"row":19,"column":23},"end":{"row":19,"column":24},"action":"insert","lines":["r"]}],[{"start":{"row":18,"column":9},"end":{"row":18,"column":10},"action":"remove","lines":[" "],"id":300}],[{"start":{"row":26,"column":0},"end":{"row":26,"column":40},"action":"remove","lines":["console.log(firebase.auth().currentUser)"],"id":301}],[{"start":{"row":25,"column":6},"end":{"row":26,"column":0},"action":"remove","lines":["",""],"id":302}],[{"start":{"row":25,"column":6},"end":{"row":26,"column":0},"action":"remove","lines":["",""],"id":303}],[{"start":{"row":25,"column":6},"end":{"row":26,"column":0},"action":"remove","lines":["",""],"id":304}],[{"start":{"row":27,"column":2},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":305},{"start":{"row":28,"column":0},"end":{"row":28,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":22,"column":0},"end":{"row":22,"column":29},"action":"remove","lines":["  window.onload = function(){"],"id":306}],[{"start":{"row":24,"column":6},"end":{"row":24,"column":7},"action":"remove","lines":["}"],"id":307}],[{"start":{"row":21,"column":1},"end":{"row":22,"column":0},"action":"remove","lines":["",""],"id":308}],[{"start":{"row":22,"column":5},"end":{"row":22,"column":6},"action":"remove","lines":[" "],"id":309},{"start":{"row":22,"column":4},"end":{"row":22,"column":5},"action":"remove","lines":[" "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"remove","lines":["    "]},{"start":{"row":21,"column":1},"end":{"row":22,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":21,"column":1},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":310}],[{"start":{"row":2,"column":2},"end":{"row":20,"column":5},"action":"remove","lines":["  .then(function(user){","        if (user){ ","            console.log(user)","            // do login stuff","             document.getElementById('google-signin')","                    .setAttribute('style','display:none; visibility: hidden')","             document.getElementById('signout')","                    .setAttribute('style','display:inline-block; visibility: visible')","        } else {","            // do not logged in stuff","             document.getElementById('google-signin')","                    .setAttribute('style','display:inline-block; visibility: visible')","             document.getElementById('signout')","                    .setAttribute('style', 'display:none; visibility:hidden ')","        }","    })  ","   .catch(function(error){","       console.log(error)","   })"],"id":311}],[{"start":{"row":1,"column":39},"end":{"row":16,"column":5},"action":"insert","lines":["function(user){","        if (user){ ","            console.log(user)","            // do login stuff","             document.getElementById('google-signin')","                    .setAttribute('style','display:none; visibility: hidden')","             document.getElementById('signout')","                    .setAttribute('style','display:inline-block; visibility: visible')","        } else {","            // do not logged in stuff","             document.getElementById('google-signin')","                    .setAttribute('style','display:inline-block; visibility: visible')","             document.getElementById('signout')","                    .setAttribute('style', 'display:none; visibility:hidden ')","        }","    }"],"id":312}],[{"start":{"row":19,"column":0},"end":{"row":19,"column":1},"action":"insert","lines":["w"],"id":313},{"start":{"row":19,"column":1},"end":{"row":19,"column":2},"action":"insert","lines":["i"]},{"start":{"row":19,"column":2},"end":{"row":19,"column":3},"action":"insert","lines":["n"]},{"start":{"row":19,"column":3},"end":{"row":19,"column":4},"action":"insert","lines":["d"]},{"start":{"row":19,"column":4},"end":{"row":19,"column":5},"action":"insert","lines":["o"]},{"start":{"row":19,"column":5},"end":{"row":19,"column":6},"action":"insert","lines":["w"]},{"start":{"row":19,"column":6},"end":{"row":19,"column":7},"action":"insert","lines":["."]},{"start":{"row":19,"column":7},"end":{"row":19,"column":8},"action":"insert","lines":["o"]},{"start":{"row":19,"column":8},"end":{"row":19,"column":9},"action":"insert","lines":["n"]},{"start":{"row":19,"column":9},"end":{"row":19,"column":10},"action":"insert","lines":["l"]},{"start":{"row":19,"column":10},"end":{"row":19,"column":11},"action":"insert","lines":["o"]},{"start":{"row":19,"column":11},"end":{"row":19,"column":12},"action":"insert","lines":["a"]}],[{"start":{"row":19,"column":12},"end":{"row":19,"column":13},"action":"insert","lines":["d"],"id":314}],[{"start":{"row":19,"column":13},"end":{"row":19,"column":14},"action":"insert","lines":[" "],"id":315},{"start":{"row":19,"column":14},"end":{"row":19,"column":15},"action":"insert","lines":["="]}],[{"start":{"row":19,"column":15},"end":{"row":19,"column":16},"action":"insert","lines":[" "],"id":316},{"start":{"row":19,"column":16},"end":{"row":19,"column":17},"action":"insert","lines":["f"]},{"start":{"row":19,"column":17},"end":{"row":19,"column":18},"action":"insert","lines":["u"]},{"start":{"row":19,"column":18},"end":{"row":19,"column":19},"action":"insert","lines":["n"]},{"start":{"row":19,"column":19},"end":{"row":19,"column":20},"action":"insert","lines":["c"]},{"start":{"row":19,"column":20},"end":{"row":19,"column":21},"action":"insert","lines":["t"]},{"start":{"row":19,"column":21},"end":{"row":19,"column":22},"action":"insert","lines":["i"]},{"start":{"row":19,"column":22},"end":{"row":19,"column":23},"action":"insert","lines":["o"]},{"start":{"row":19,"column":23},"end":{"row":19,"column":24},"action":"insert","lines":["n"]},{"start":{"row":19,"column":24},"end":{"row":19,"column":25},"action":"insert","lines":["("]}],[{"start":{"row":19,"column":25},"end":{"row":19,"column":26},"action":"insert","lines":[")"],"id":317}],[{"start":{"row":19,"column":26},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":318}],[{"start":{"row":19,"column":26},"end":{"row":19,"column":27},"action":"insert","lines":["{"],"id":319}],[{"start":{"row":21,"column":6},"end":{"row":21,"column":7},"action":"insert","lines":["}"],"id":320},{"start":{"row":21,"column":0},"end":{"row":21,"column":6},"action":"remove","lines":["      "]}],[{"start":{"row":3,"column":29},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":328},{"start":{"row":4,"column":0},"end":{"row":4,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["c"],"id":329},{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["o"]},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["n"]},{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["s"]},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["o"]},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["l"]},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["e"]},{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":["."]},{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["l"]},{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["o"]},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["g"]}],[{"start":{"row":4,"column":23},"end":{"row":4,"column":25},"action":"insert","lines":["()"],"id":330}],[{"start":{"row":4,"column":24},"end":{"row":4,"column":26},"action":"insert","lines":["''"],"id":331}],[{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"insert","lines":["U"],"id":332},{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"insert","lines":["s"]},{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"insert","lines":["e"]},{"start":{"row":4,"column":28},"end":{"row":4,"column":29},"action":"insert","lines":["r"]}],[{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"insert","lines":[" "],"id":333},{"start":{"row":4,"column":30},"end":{"row":4,"column":31},"action":"insert","lines":["s"]},{"start":{"row":4,"column":31},"end":{"row":4,"column":32},"action":"insert","lines":["i"]},{"start":{"row":4,"column":32},"end":{"row":4,"column":33},"action":"insert","lines":["g"]},{"start":{"row":4,"column":33},"end":{"row":4,"column":34},"action":"insert","lines":["n"]},{"start":{"row":4,"column":34},"end":{"row":4,"column":35},"action":"insert","lines":["e"]},{"start":{"row":4,"column":35},"end":{"row":4,"column":36},"action":"insert","lines":["d"]}],[{"start":{"row":4,"column":36},"end":{"row":4,"column":37},"action":"insert","lines":[" "],"id":334},{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"insert","lines":["i"]},{"start":{"row":4,"column":38},"end":{"row":4,"column":39},"action":"insert","lines":["n"]}],[{"start":{"row":4,"column":12},"end":{"row":4,"column":41},"action":"remove","lines":["console.log('User signed in')"],"id":335}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":12},"action":"remove","lines":["    "],"id":336},{"start":{"row":4,"column":4},"end":{"row":4,"column":8},"action":"remove","lines":["    "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"remove","lines":["    "]},{"start":{"row":3,"column":29},"end":{"row":4,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":2,"column":19},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":337},{"start":{"row":3,"column":0},"end":{"row":3,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":41},"action":"insert","lines":["console.log('User signed in')"],"id":338}],[{"start":{"row":10,"column":16},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":339},{"start":{"row":11,"column":0},"end":{"row":11,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":11,"column":12},"end":{"row":11,"column":41},"action":"insert","lines":["console.log('User signed in')"],"id":340}],[{"start":{"row":11,"column":29},"end":{"row":11,"column":30},"action":"insert","lines":[" "],"id":341},{"start":{"row":11,"column":30},"end":{"row":11,"column":31},"action":"insert","lines":["n"]},{"start":{"row":11,"column":31},"end":{"row":11,"column":32},"action":"insert","lines":["o"]},{"start":{"row":11,"column":32},"end":{"row":11,"column":33},"action":"insert","lines":["t"]}],[{"start":{"row":0,"column":27},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":343},{"start":{"row":1,"column":0},"end":{"row":1,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["v"],"id":344},{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":["a"]},{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["r"]}],[{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":[" "],"id":345},{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["u"]},{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"insert","lines":["s"]},{"start":{"row":1,"column":10},"end":{"row":1,"column":11},"action":"insert","lines":["e"]},{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["r"]}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"insert","lines":[" "],"id":346},{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"insert","lines":["="]}],[{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"insert","lines":[" "],"id":347},{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"insert","lines":["f"]},{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"insert","lines":["i"]},{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"insert","lines":["r"]},{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"insert","lines":["e"]},{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"insert","lines":["b"]},{"start":{"row":1,"column":20},"end":{"row":1,"column":21},"action":"insert","lines":["a"]}],[{"start":{"row":1,"column":21},"end":{"row":1,"column":22},"action":"insert","lines":["s"],"id":348},{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"insert","lines":["e"]},{"start":{"row":1,"column":23},"end":{"row":1,"column":24},"action":"insert","lines":["."]},{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"insert","lines":["a"]},{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"insert","lines":["u"]},{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":["t"]},{"start":{"row":1,"column":27},"end":{"row":1,"column":28},"action":"insert","lines":["h"]}],[{"start":{"row":1,"column":28},"end":{"row":1,"column":30},"action":"insert","lines":["()"],"id":349}],[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":["."],"id":350},{"start":{"row":1,"column":31},"end":{"row":1,"column":32},"action":"insert","lines":["c"]},{"start":{"row":1,"column":32},"end":{"row":1,"column":33},"action":"insert","lines":["u"]},{"start":{"row":1,"column":33},"end":{"row":1,"column":34},"action":"insert","lines":["r"]},{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"insert","lines":["r"]},{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"insert","lines":["e"]},{"start":{"row":1,"column":36},"end":{"row":1,"column":37},"action":"insert","lines":["n"]},{"start":{"row":1,"column":37},"end":{"row":1,"column":38},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"insert","lines":["U"],"id":351},{"start":{"row":1,"column":39},"end":{"row":1,"column":40},"action":"insert","lines":["s"]},{"start":{"row":1,"column":40},"end":{"row":1,"column":41},"action":"insert","lines":["e"]},{"start":{"row":1,"column":41},"end":{"row":1,"column":42},"action":"insert","lines":["r"]}],[{"start":{"row":1,"column":42},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":352},{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":4},"action":"remove","lines":["    var user = firebase.auth().currentUser","    "],"id":353}],[{"start":{"row":0,"column":27},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":354}],[{"start":{"row":25,"column":19},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":355},{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"insert","lines":["    "]},{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"insert","lines":["f"]},{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"insert","lines":["i"]},{"start":{"row":26,"column":6},"end":{"row":26,"column":7},"action":"insert","lines":["r"]},{"start":{"row":26,"column":7},"end":{"row":26,"column":8},"action":"insert","lines":["e"]},{"start":{"row":26,"column":8},"end":{"row":26,"column":9},"action":"insert","lines":["b"]},{"start":{"row":26,"column":9},"end":{"row":26,"column":10},"action":"insert","lines":["a"]},{"start":{"row":26,"column":10},"end":{"row":26,"column":11},"action":"insert","lines":["s"]},{"start":{"row":26,"column":11},"end":{"row":26,"column":12},"action":"insert","lines":["e"]}],[{"start":{"row":26,"column":12},"end":{"row":26,"column":13},"action":"insert","lines":["."],"id":356},{"start":{"row":26,"column":13},"end":{"row":26,"column":14},"action":"insert","lines":["a"]},{"start":{"row":26,"column":14},"end":{"row":26,"column":15},"action":"insert","lines":["u"]},{"start":{"row":26,"column":15},"end":{"row":26,"column":16},"action":"insert","lines":["t"]},{"start":{"row":26,"column":16},"end":{"row":26,"column":17},"action":"insert","lines":["h"]}],[{"start":{"row":26,"column":17},"end":{"row":26,"column":19},"action":"insert","lines":["()"],"id":357}],[{"start":{"row":26,"column":19},"end":{"row":26,"column":20},"action":"insert","lines":["."],"id":358},{"start":{"row":26,"column":20},"end":{"row":26,"column":21},"action":"insert","lines":["s"]},{"start":{"row":26,"column":21},"end":{"row":26,"column":22},"action":"insert","lines":["i"]},{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":["g"]},{"start":{"row":26,"column":23},"end":{"row":26,"column":24},"action":"insert","lines":["n"]},{"start":{"row":26,"column":24},"end":{"row":26,"column":25},"action":"insert","lines":["O"]},{"start":{"row":26,"column":25},"end":{"row":26,"column":26},"action":"insert","lines":["u"]},{"start":{"row":26,"column":26},"end":{"row":26,"column":27},"action":"insert","lines":["t"]}],[{"start":{"row":26,"column":27},"end":{"row":26,"column":29},"action":"insert","lines":["()"],"id":359}],[{"start":{"row":4,"column":29},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":360},{"start":{"row":5,"column":0},"end":{"row":5,"column":12},"action":"insert","lines":["            "]},{"start":{"row":5,"column":12},"end":{"row":6,"column":0},"action":"insert","lines":["",""]},{"start":{"row":6,"column":0},"end":{"row":6,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"insert","lines":["v"],"id":361},{"start":{"row":5,"column":13},"end":{"row":5,"column":14},"action":"insert","lines":["a"]},{"start":{"row":5,"column":14},"end":{"row":5,"column":15},"action":"insert","lines":["r"]}],[{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"insert","lines":[" "],"id":362},{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"insert","lines":["p"]},{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["h"]},{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":["o"]},{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["t"]},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["o"]}],[{"start":{"row":5,"column":16},"end":{"row":5,"column":21},"action":"remove","lines":["photo"],"id":363},{"start":{"row":5,"column":16},"end":{"row":5,"column":24},"action":"insert","lines":["photoURL"]}],[{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"insert","lines":[" "],"id":364},{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["="]}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":[" "],"id":365},{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["u"]},{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"insert","lines":["s"]},{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"insert","lines":["e"]},{"start":{"row":5,"column":30},"end":{"row":5,"column":31},"action":"insert","lines":["r"]}],[{"start":{"row":5,"column":31},"end":{"row":5,"column":32},"action":"insert","lines":["."],"id":366}],[{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"insert","lines":["p"],"id":367},{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"insert","lines":["h"]},{"start":{"row":5,"column":34},"end":{"row":5,"column":35},"action":"insert","lines":["o"]},{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"insert","lines":["t"]},{"start":{"row":5,"column":36},"end":{"row":5,"column":37},"action":"insert","lines":["o"]}],[{"start":{"row":5,"column":32},"end":{"row":5,"column":37},"action":"remove","lines":["photo"],"id":368},{"start":{"row":5,"column":32},"end":{"row":5,"column":40},"action":"insert","lines":["photoURL"]}],[{"start":{"row":5,"column":40},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":369},{"start":{"row":6,"column":0},"end":{"row":6,"column":12},"action":"insert","lines":["            "]},{"start":{"row":6,"column":12},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":7,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":7,"column":12},"end":{"row":8,"column":67},"action":"insert","lines":[" document.getElementById('google-pic')","                                     .setAttribute('src', photoURL)"],"id":370}],[{"start":{"row":8,"column":36},"end":{"row":8,"column":37},"action":"remove","lines":[" "],"id":371},{"start":{"row":8,"column":32},"end":{"row":8,"column":36},"action":"remove","lines":["    "]},{"start":{"row":8,"column":28},"end":{"row":8,"column":32},"action":"remove","lines":["    "]},{"start":{"row":8,"column":24},"end":{"row":8,"column":28},"action":"remove","lines":["    "]},{"start":{"row":8,"column":20},"end":{"row":8,"column":24},"action":"remove","lines":["    "]}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":12},"action":"remove","lines":["    "],"id":372},{"start":{"row":9,"column":4},"end":{"row":9,"column":8},"action":"remove","lines":["    "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"remove","lines":["    "]},{"start":{"row":8,"column":50},"end":{"row":9,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"insert","lines":[" "],"id":373}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":4,"column":29},"end":{"row":4,"column":29},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1554071246389,"hash":"b5205901bde00c98ac288b040c1e62f53317b260"}