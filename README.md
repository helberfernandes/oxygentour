# oxygentour
jQuery Lightweight Site Tour

## Getting Started

### Prerequisites
  Jquery 3.*

### Installing

Add JavaScript in your project:
```
<script type="text/javascript" src="./js/oxygentour.js"></script>
```
Before call project 

```
<script type="text/javascript">

    var divs = [
    {id : "test1", msg: "your text message here"},
    {id : "test2", msg: "your text message here"},
    {id : "test3", msg: "your text message here"},
    {id : "test4", msg: "your text message here"},
    {id : "test5", msg: "your text message here"}
    ];


    var o= new OxygenTour(divs);
    o.init();



  </script>
  ```
  
  ## Authors

* **Helber Fernandes** - *Initial work* - [helberfernandes](https://github.com/helberfernandes)
