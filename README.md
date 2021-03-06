# Notify2.js
## Notify2.js is a javascript class and library that allows you to quickly implement a notification bar at the bottom of the screen.

### Some of the features include:

- Four classes: error, success, info, warn, and mail, each with different colors, icons and sounds
- UI sounds play, depending on class
- Auto-hide toggle via class metrhod
- Set auto-hide delay via class method
- Confirm function allows user to select &quot;Yes&quot; or &quot;No&quot; with settable callbacks
- Custom HTML can be inputted as notifcation message
- Fully mobile-responsive CSS

Notify2.js requires only jquery to work. To use, simply import notify2.js and notify2.css into your web site.

Notify2.js also works with Sounds.js as an optional plugin. Simply load Sounds.js into your site and set `useSounds` to `true`.

#### Example:
```javascript
var notify = new Notify2("Some kind of error occurred!", "error");
notify.notify();
```

#### Confirm dialog example:
```javascript
var confirm = new Notify2("Are you sure you want to blow up the Earth?", "info");
confirm.doConfirm(yesButtonCallback, noButtonCallback);
confirm.setBindEvent('touchstart'); // Sets event to bind to on buttons (asynchronously)
confirm.notify();
```

#### Mail dialog example:
```javascript
var n = new Notify2("You have a new message, would you like to read it now?", "mail");
n.doConfirm(readMailFunction);
n.notify();
```

#### Callback with target example:
```html
<button class="del-user-btn" data-id="10000">Delete User</button>
```

```javascript
$(document).ready(function () {
    $(".del-user-btn").click(function(){
        var n = new Notify2("Are you sure you want to delete this user?", "warn");
        n.doConfirm(doDelUser, null, $(this));
        n.notify();
    });
});

function doDelUser(me)
{
    var id = me.target.data('id');
    console.log(id);
}
```

## Methods

### Constructor:
```javascript
/**
 * message = message to display (string)
 * class [optional] = css class to use (string). Options are: error, info, warn, success (default is error)
 * autoHide [optional] = auto hide message (boolean) (default is true)
 * delay [optional] = delay in milliseconds before autoHide hides message (int) (default is 3000)
 */
new Notify2(message, class, autoHide, delay);
```

### Getters

Future use

### Setters

```javascript
setAutoHide(true|false) // Sets autoHide, accepts boolean

setDelay(3000) // Sets delay time before auto-hide. Default is 300. Accepts integer

setBindEvent('click') // Set DOM event to bind confirm buttons to (asynchronously)

setDebug(true|false) // Turns on console debugging (default is false)

doConfirm(yesCallbackFunction, [noCallbackFunction, target])  // Sets up notification to be a confirmation dialog
                                                    // with a yes and no button.
                                                    // Accepts two function references
                                                    // Third param is target element to add to callback
```

### Actions

```javascript
notify() // Calls notification into existence
```

### Helper Functions

```javascript
showNotify2(notifyElement) // Shows notify2 element

hideNotify2(notifyElement) // Hides notify2 element and destroys it

notify2(message, class, autoHide) // Shortcut function to instantiate a basic notfication on one line
```

### Project Web Page:
https://code.cloudulus.media/project/100/notify.js

# NotifyD.js

NotifyD is a notification daemon written in Javascript meant to work with Notify2.js.