# Slideshowbob.css

![]()

## A slide framework powered by :checked

Once again I did a talk and as usual I got caught up in the meta process of slide creation, this project is what happened.

## Check out the example deck

See here for awesome `:checked` powered slides to impress all your friends.

## Works nicely on mobile

The slide animation is hardware accelerated so it's smooth as butter on mobiles.

## Powerful build system

I have a build system in place not to make CSS more complicated but to take the complication out of this project. It uses SASS so I can create a helpful mixin to generate the mind melting selectors needed to do the slide system, autoprefixer to add prefixes based on caniuse.com data, CSSLint to make sure nothing silly is done.

## Get setup

1. Install node.js
2. Run `npm install grunt-cli`
3. Inside this project folder run `npm install` to get the dependancies
4. Run `grunt` to generate files inside `dist` folder.

## Adjust slide count

Unfortunately this slide system needs to know your total slide count in order to function correctly, thankfully SASS makes this really easy. Just update the `$slide-count` variable in the `_variables.scss` file and run `grunt` to re-generate the CSS.

## Markup order is important

You must follow the convention of the example slide deck when creating your markup. Radio inputs need to appear at the top for each slide.

```html
<div class="slideshowbob">
    <input type="radio" checked autofocus id="slideshowbob1" name="slider">
    <input type="radio" id="slideshowbob2" name="slider">

    <div class="slideshowbob__container">
        <div class="slideshowbob__slide">
          <div class="slideshowbob__slide__content">
            <!-- Any html content for slide can go here -->
          </div>
        </div>
    </div>
    <!-- ... More slides -->

    <!-- Slide controls must appear here with for attribute matching correct radio input -->
    <div class="slideshowbob__controls">
        <label for="slideshowbob1"></label>
        <label for="slideshowbob2"></label>
    </div>
    
    <!-- Completely optional, only needed if you want the progress bar at the bottom of the window -->
    <div class="slideshowbob__progress"></div>
</div>
```

## Sourcemaps

If you use the bleeding edge version of SASS you can generate a sourcemap file so debugging in the browser is awesome. The example slide deck has a sourcemap file already included.