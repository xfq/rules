export const ShopifyThemeRules = [
  {
    title: "Shopify Theme Development Guidelines",
    tags: ["Shopify", "Theme Development", "Best Practices", "Liquid", "CSS", "JavaScript", "UX", "Performance"],
    slug: "shopify-theme-development-guidelines",
    content: `
    You are an Expert Shopify Theme Developer with advanced knowledge of Liquid, HTML, CSS, JavaScript, and the latest Shopify Online Store 2.0 features.
---
description: Best practices for Shopify theme development with Liquid, JavaScript, and CSS
globs: **/*.liquid, assets/*.js, assets/*.css, sections/*.liquid, snippets/*.liquid, templates/**/*.liquid, blocks/*.liquid
alwaysApply: true
---
# Liquid Development Guidelines

## Liquid Rules

### Valid Filters
* **Cart**
    * \`item_count_for_variant\`: \`cart | item_count_for_variant: {variant_id}\`
    * \`line_items_for\`: \`cart | line_items_for: object\`
* **HTML**
    * \`class_list\`: \`settings.layout | class_list\`
    * \`time_tag\`: \`string | time_tag: string\`
    * \`inline_asset_content\`: \`asset_name | inline_asset_content\`
    * \`highlight\`: \`string | highlight: string\`
    * \`link_to\`: \`string | link_to: string\`
    * \`placeholder_svg_tag\`: \`string | placeholder_svg_tag\`
    * \`preload_tag\`: \`string | preload_tag: as: string\`
    * \`script_tag\`: \`string | script_tag\`
    * \`stylesheet_tag\`: \`string | stylesheet_tag\`
* **Collection**
    * \`link_to_type\`: \`string | link_to_type\`
    * \`link_to_vendor\`: \`string | link_to_vendor\`
    * \`sort_by\`: \`string | sort_by: string\`
    * \`url_for_type\`: \`string | url_for_type\`
    * \`url_for_vendor\`: \`string | url_for_vendor\`
    * \`within\`: \`string | within: collection\`
    * \`highlight_active_tag\`: \`string | highlight_active_tag\`
* **Color**
    * \`brightness_difference\`: \`string | brightness_difference: string\`
    * \`color_brightness\`: \`string | color_brightness\`
    * \`color_contrast\`: \`string | color_contrast: string\`
    * \`color_darken\`: \`string | color_darken: number\`
    * \`color_desaturate\`: \`string | color_desaturate: number\`
    * \`color_difference\`: \`string | color_difference: string\`
    * \`color_extract\`: \`string | color_extract: string\`
    * \`color_lighten\`: \`string | color_lighten: number\`
    * \`color_mix\`: \`string | color_mix: string, number\`
    * \`color_modify\`: \`string | color_modify: string, number\`
    * \`color_saturate\`: \`string | color_saturate: number\`
    * \`color_to_hex\`: \`string | color_to_hex\`
    * \`color_to_hsl\`: \`string | color_to_hsl\`
    * \`color_to_rgb\`: \`string | color_to_rgb\`
    * \`hex_to_rgba\`: \`string | hex_to_rgba\`
* **String**
    * \`hmac_sha1\`: \`string | hmac_sha1: string\`
    * \`hmac_sha256\`: \`string | hmac_sha256: string\`
    * \`md5\`: \`string | md5\`
    * \`sha1\`: \`string | sha1: string\`
    * \`sha256\`: \`string | sha256: string\`
    * \`append\`: \`string | append: string\`
    * \`base64_decode\`: \`string | base64_decode\`
    * \`base64_encode\`: \`string | base64_encode\`
    * \`base64_url_safe_decode\`: \`string | base64_url_safe_decode\`
    * \`base64_url_safe_encode\`: \`string | base64_url_safe_encode\`
    * \`capitalize\`: \`string | capitalize\`
    * \`downcase\`: \`string | downcase\`
    * \`escape\`: \`string | escape\`
    * \`escape_once\`: \`string | escape_once\`
    * \`lstrip\`: \`string | lstrip\`
    * \`newline_to_br\`: \`string | newline_to_br\`
    * \`prepend\`: \`string | prepend: string\`
    * \`remove\`: \`string | remove: string\`
    * \`remove_first\`: \`string | remove_first: string\`
    * \`remove_last\`: \`string | remove_last: string\`
    * \`replace\`: \`string | replace: string, string\`
    * \`replace_first\`: \`string | replace_first: string, string\`
    * \`replace_last\`: \`string | replace_last: string, string\`
    * \`rstrip\`: \`string | rstrip\`
    * \`slice\`: \`string | slice\`
    * \`split\`: \`string | split: string\`
    * \`strip\`: \`string | strip\`
    * \`strip_html\`: \`string | strip_html\`
    * \`strip_newlines\`: \`string | strip_newlines\`
    * \`truncate\`: \`string | truncate: number\`
    * \`truncatewords\`: \`string | truncatewords: number\`
    * \`upcase\`: \`string | upcase\`
    * \`url_decode\`: \`string | url_decode\`
    * \`url_encode\`: \`string | url_encode\`
    * \`camelize\`: \`string | camelize\`
    * \`handleize\`: \`string | handleize\`
    * \`url_escape\`: \`string | url_escape\`
    * \`url_param_escape\`: \`string | url_param_escape\`
    * \`pluralize\`: \`number | pluralize: string, string\`
* **Localization**
    * \`currency_selector\`: \`form | currency_selector\`
    * \`translate\`: \`string | t\`
    * \`format_address\`: \`address | format_address\`
* **Customer**
    * \`customer_login_link\`: \`string | customer_login_link\`
    * \`customer_logout_link\`: \`string | customer_logout_link\`
    * \`customer_register_link\`: \`string | customer_register_link\`
    * \`avatar\`: \`customer | avatar\`
    * \`login_button\`: \`shop | login_button\`
* **Format**
    * \`date\`: \`string | date: string\`
    * \`json\`: \`variable | json\`
    * \`structured_data\`: \`variable | structured_data\`
    * \`weight_with_unit\`: \`number | weight_with_unit\`
* **Font**
    * \`font_face\`: \`font | font_face\`
    * \`font_modify\`: \`font | font_modify: string, string\`
    * \`font_url\`: \`font | font_url\`
* **Default**
    * \`default_errors\`: \`string | default_errors\`
    * \`default\`: \`variable | default: variable\`
    * \`default_pagination\`: \`paginate | default_pagination\`
* **Payment**
    * \`payment_button\`: \`form | payment_button\`
    * \`payment_terms\`: \`form | payment_terms\`
    * \`payment_type_img_url\`: \`string | payment_type_img_url\`
    * \`payment_type_svg_tag\`: \`string | payment_type_svg_tag\`
* **Math**
    * \`abs\`: \`number | abs\`
    * \`at_least\`: \`number | at_least\`
    * \`at_most\`: \`number | at_most\`
    * \`ceil\`: \`number | ceil\`
    * \`divided_by\`: \`number | divided_by: number\`
    * \`floor\`: \`number | floor\`
    * \`minus\`: \`number | minus: number\`
    * \`modulo\`: \`number | modulo: number\`
    * \`plus\`: \`number | plus: number\`
    * \`round\`: \`number | round\`
    * \`times\`: \`number | times: number\`
* **Array**
    * \`compact\`: \`array | compact\`
    * \`concat\`: \`array | concat: array\`
    * \`find\`: \`array | find: string, string\`
    * \`find_index\`: \`array | find_index: string, string\`
    * \`first\`: \`array | first\`
    * \`has\`: \`array | has: string, string\`
    * \`join\`: \`array | join\`
    * \`last\`: \`array | last\`
    * \`map\`: \`array | map: string\`
    * \`reject\`: \`array | reject: string, string\`
    * \`reverse\`: \`array | reverse\`
    * \`size\`: \`variable | size\`
    * \`sort\`: \`array | sort\`
    * \`sort_natural\`: \`array | sort_natural\`
    * \`sum\`: \`array | sum\`
    * \`uniq\`: \`array | uniq\`
    * \`where\`: \`array | where: string, string\`
* **Media**
    * \`external_video_tag\`: \`variable | external_video_tag\`
    * \`external_video_url\`: \`media | external_video_url: attribute: string\`
    * \`image_tag\`: \`string | image_tag\`
    * \`media_tag\`: \`media | media_tag\`
    * \`model_viewer_tag\`: \`media | model_viewer_tag\`
    * \`video_tag\`: \`media | video_tag\`
    * \`article_img_url\`: \`variable | article_img_url\`
    * \`collection_img_url\`: \`variable | collection_img_url\`
    * \`image_url\`: \`variable | image_url: width: number, height: number\`
    * \`img_tag\`: \`string | img_tag\`
    * \`img_url\`: \`variable | img_url\`
    * \`product_img_url\`: \`variable | product_img_url\`
* **Metafield**
    * \`metafield_tag\`: \`metafield | metafield_tag\`
    * \`metafield_text\`: \`metafield | metafield_text\`
* **Money**
    * \`money\`: \`number | money\`
    * \`money_with_currency\`: \`number | money_with_currency\`
    * \`money_without_currency\`: \`number | money_without_currency\`
    * \`money_without_trailing_zeros\`: \`number | money_without_trailing_zeros\`
* **Tag**
    * \`link_to_add_tag\`: \`string | link_to_add_tag\`
    * \`link_to_remove_tag\`: \`string | link_to_remove_tag\`
    * \`link_to_tag\`: \`string | link_to_tag\`
* **Hosted_file**
    * \`asset_img_url\`: \`string | asset_img_url\`
    * \`asset_url\`: \`string | asset_url\`
    * \`file_img_url\`: \`string | file_img_url\`
    * \`file_url\`: \`string | file_url\`
    * \`global_asset_url\`: \`string | global_asset_url\`
    * \`shopify_asset_url\`: \`string | shopify_asset_url\`

### Valid Tags
* **Theme**
    * \`content_for\`
    * \`layout\`
    * \`include\`
    * \`render\`
    * \`javascript\`
    * \`section\`
    * \`stylesheet\`
    * \`sections\`
* **HTML**
    * \`form\`
    * \`style\`
* **Variable**
    * \`assign\`
    * \`capture\`
    * \`decrement\`
    * \`increment\`
* **Iteration**
    * \`break\`
    * \`continue\`
    * \`cycle\`
    * \`for\`
    * \`tablerow\`
    * \`paginate\`
    * \`else\`
* **Conditional**
    * \`case\`
    * \`if\`
    * \`unless\`
    * \`else\`
* **Syntax**
    * \`comment\`
    * \`echo\`
    * \`raw\`
    * \`liquid\`

### Valid Objects
* \`collections\`
* \`pages\`
* \`all_products\`
* \`articles\`
* \`blogs\`
* \`cart\`
* \`closest\`
* \`content_for_header\`
* \`customer\`
* \`images\`
* \`linklists\`
* \`localization\`
* \`metaobjects\`
* \`request\`
* \`routes\`
* \`shop\`
* \`theme\`
* \`settings\`
* \`template\`
* \`additional_checkout_buttons\`
* \`all_country_option_tags\`
* \`canonical_url\`
* \`content_for_additional_checkout_buttons\`
* \`content_for_index\`
* \`content_for_layout\`
* \`country_option_tags\`
* \`current_page\`
* \`handle\`
* \`page_description\`
* \`page_image\`
* \`page_title\`
* \`powered_by_link\`
* \`scripts\`

### Validation Rules
* **Syntax**
    * Use \`{% liquid %}\` for multiline code.
    * Use \`{% # comments %}\` for inline comments.
    * Never invent new filters, tags, or objects.
    * Follow proper tag closing order.
    * Use proper object dot notation.
    * Respect object scope and availability.
* **Theme Structure**
    * Place files in appropriate directories.
    * Follow naming conventions.
    * Respect template hierarchy.
    * Maintain proper section/block structure.
    * Use appropriate schema settings.

## Theme Architecture

### Folder Structure
* \`sections\`: Liquid files that define customizable sections of a page. They include blocks and settings defined via a schema, allowing merchants to modify them in the theme editor.
* \`blocks\`: Configurable elements within sections that can be added, removed, or reordered. They are defined with a schema tag for merchant customization in the theme editor.
* \`layout\`: Defines the structure for repeated content such as headers and footers, wrapping other template files. It's the frame that holds the page together, but it's not the content.
* \`snippets\`: Reusable code fragments included in templates, sections, and layouts via the render tag. Ideal for logic that needs to be reused but not directly edited in the theme editor.
* \`config\`: Holds settings data and schema for theme customization options like typography and colors, accessible through the Admin theme editor.
* \`assets\`: Contains static files such as CSS, JavaScript, and images. These assets can be referenced in Liquid files using the \`asset_url\` filter.
* \`locales\`: Stores translation files for localizing theme editor and storefront content.
* \`templates\`: JSON files that specify which sections appear on each page type (e.g., product, collection, blog). They are wrapped by layout files for consistent header/footer content. Templates can be Liquid files as well, but JSON is preferred as a good practice.
* \`templates/customers\`: Templates for customer-related pages such as login and account overview.
* \`templates/metaobject\`: Templates for rendering custom content types defined as metaobjects.

## UX Principles

### Translations
* Keep every piece of text in the theme translated.
* Update the locale files with sensible keys and text.
* Just add English text, not other languages, as translators handle other languages.

### Settings

#### General Guidance
* Keep it simple, clear, and non-repetitive.
* The setting type can provide context that the setting label doesn't need to provide. Example: "Number of columns" can simply be "Columns" if the input indicates that it's a number value.
* Assume all settings to be device-agnostic, with graceful scaling between breakpoints. Only mention mobile or desktop if there is a unique setting required.
* Use common shorthand where it makes sense. Example: Max/Min to mean Maximum and Minimum. Caveat: ensure these values are translated/localized correctly.
* Help text: Minimize use as much as possible. If really required, make it short and remove punctuation unless it's more than 1 sentence (but it shouldn't be!).

#### Information Architecture

* **Ordering**
    * List settings to reflect the order of elements they control in the preview. Top to bottom, left to right, background to foreground.
    * List resource pickers first, if they're needed, followed by customization settings. Focus on what the merchant needs to take action on in order for the section/block to function. Example: a featured collection block needs the merchant to choose a collection before deciding the number of products per row.
    * List settings in order of visual impact, example: Number of products per row should come before the product card settings.
* **Groupings**
    * Consider grouping settings under a heading if there are more than 1 related setting. List ungrouped settings at the top of the section/block.
    * Common groupings:
        * Layout
        * Typography
        * Colors
        * Padding
* **Naming**
    * Remove word duplication in the heading and nested labels. When a word appears in a heading (e.g., "Color"), it should not be repeated in nested setting labels or help text. The hierarchy of information provides sufficient context.
* **Conditional**
    * Use conditional settings when it:
        * simplifies decision-making for merchants via progressive disclosure
        * avoids duplication of settings
        * avoids visual clutter and reduces cognitive load
    * Conditional settings should appear in the information architecture wherever they're most relevant. That might be directly below the trigger setting, or it could be a whole separate group of settings that are surfaced elsewhere where it makes sense for the merchant.
    * Tradeoffs and considerations of conditional settings:
        * They hide functionality/options that help merchants decide how style their website, so be judicious in what concepts you tie together. For example, don't make a Product card's "Swatch display" setting conditional on a "Quick buy" setting. They are both related to variant selection, but they serve different purposes.
        * Limit conditions to 2 levels deep to avoid complex logic (up for discussion!).
        * Even when not shown, a conditional setting's value is evaluated in the Liquid code. Code defensively, never assume a theme setting's value is nil.
* **Input Type**
    * **Checkbox**: Treat checkbox as an on/off switch. Avoid using verb-based labels, example: use "Language selector" and not "Enable language selector". The presence of the verb may inadvertently suggest the direction to toggle to enable or disable it.
    * **Select**: Keep select option labels as short as possible so they can be dynamically displayed as segmented controls.

### Server-Side Rendering
* Storefronts are to be rendered server-side with Liquid as a first principle, as opposed to client-side JavaScript.
* When using JavaScript to render part of the page, fetch the new HTML from the server wherever possible.

#### Optimistic UI
* This is the exception to the rule of server-side rendering.
* "Optimistic UI" is the idea that we can update part of the UI before the server response is received in the name of **perceived performance**.
* **Criteria**
    * Key factors to consider when deciding whether to use optimistic UI:
        1. You are updating a **small** portion of the UI on the client (with JavaScript) before the server response is received.
        2. The API request has a high degree of certainty of being successful.
    * Examples of appropriate use cases:
        * When filtering a collection page, we can update the a list of applied filters client-side as a Buyer chooses them, i.e., "Color: Red" or "Size: Medium". However, we do not know how many products will be returned that match the filters, so we can't update the product grid or a count of products.
        * When a Buyer attempts to add an item to their cart, we can update the cart item count client-side. Assuming our product form's "add to cart" button is already checking the item's availability, we can have a reasonably high degree of certainty that the item will be added to the cart (API request is successful). However, we do not know what the new cart total will be, nor do we know what the line items will look like, so we can't update those in a cart drawer without waiting for the server response.

## HTML
* Use semantic HTML.
* Use modern HTML features where appropriate, e.g., use \`<details>\` and \`<summary>\` over JS to show and hide content.
* Use \`CamelCase\` for IDs. When appending a block or section ID, append \`-\{\{ block.id \}\}\` or \`-\{\{ section.id \}\}\` respectively.

### Accessibility
* Ensure all interactive elements are focusable. e.g., if you use a label to style a checkbox, include \`tabindex="0"\`.
* Only use \`tabindex="0"\` unless absolutely necessary, to avoid hijacking tab flow.

## CSS

### Specificity
* Never use IDs as selectors.
* Avoid using elements as selectors.
* Avoid using \`!important\` at all costs - if you must use it, comment why in the code.
* Use a \`0 1 0\` specificity wherever possible, meaning a single \`.class\` selector.
* In cases where you must use higher specificity due to a parent/child relationship, try to keep the specificity to a maximum of \`0 4 0\`.
* Note that this can sometimes be impossible due to the \`0 1 0\` specificity of pseudo-classes like \`:hover\`. There may be situations where \`.parent:hover .child\` is the only way to achieve the desired effect.
* Avoid complex selectors. A selector should be easy to understand at a glance. Don't overdo it with pseudo selectors (\`:has\`, \`:where\`, \`:nth-child\`, etc).

### Variables
* Use CSS variables (custom properties) to reduce redundancy and make updates easier.
* If hardcoding a value, set it to a variable first (e.g., \`--touch-target-size: 44px\`).
* Never hardcode colors, always use color schemes.
* Scope variables to components unless they need to be global.
* Global variables should be in \`:root\` in \`snippets/theme-styles-variables.liquid\`.
* Scoped variables can reference global variables.

### Scoping
* Prefer using \`{% stylesheet %}\` tags in sections, blocks, and snippets for the relevant CSS.
* Reset CSS variable values inline with style attributes for section/block settings.
* Avoid using \`{% style %}\` tags with block/section ID selectors.
* Use variables to reduce property assignment redundancy.

### BEM
* Use BEM naming convention:
    * **Block**: the component
    * **Element**: child of component (\`block__element\`)
    * **Modifier**: variant (\`block--modifier\`, \`block__element--modifier\`)
* Use dashes to separate words in blocks/elements/modifiers.

### Media Queries
* Default to mobile first (\`min-width\` queries).
* Use \`screen\` for all media queries.

### Nesting
* Do not use \`&\` operator.
* Never nest beyond first level.
* Exceptions:
    * Media queries should be nested.
    * Parent-child relationships with multiple states/modifiers affecting children.
* Keep nesting simple and logical.

## JavaScript

### General Principles
* Lean towards using zero external dependencies.
* Use JS when needed, but reach for native browser features first.
    * e.g., use "popover" or "details" over JS unless there is a good reason to do otherwise.
* Do not use "var".
* Prefer "const" over "let" - avoid mutation unless necessary.
* Prefer "for (const thing of things)" over "things.forEach()".
* Put new lines before new "blocks" of code. A block is anything with a "{" and "}".

### Performance Optimization
- Optimize **image loading** by using Shopify's CDN and the \`image_url\` filter.
- Minify **JavaScript and CSS files**.
- Leverage **browser caching**.
- Reduce the number of **HTTP requests**.
- Consider **lazy loading**.
- Monitor **theme performance** using Google Lighthouse and Shopify Theme Check.

### File Structure
* Group scripts by feature area where appropriate.
    * e.g., "collection.js" contains multiple classes related to the collection page; they don't each need to be their own file if they are all being used together consistently.

### Modules
* Use the module pattern for loading JavaScript. This avoids polluting the global scope and allows for easier code splitting.

#### Privacy and Instance Methods
* The public API of a module should be the smallest possible surface to provide the necessary functionality.
* All other instance methods should be prefixed with "#" and are private.
* Do not use instance methods for functions that do not use the class instance.

\`\`\`javascript
class MyClass {
  constructor() {
    this.cache = new Map();
  }

  // This is a method that is meant to be used by other classes that import this module
  myPublicMethod() {
    this.#myPrivateMethod();
  }

  // This is a method that is only meant to be used within this module and requires access to the instance
  #myPrivateMethod() {
    this.cache.set('key', 'value');
  }
}

// This is a utility that is scoped to this module.  It does not require access to the instance to work
const someUtilityFunction = (num1, num2) => num1 + num2;
\`\`\`
`,
    author: {
      name: "Md Morshadun Nur", // Optional
      url: "https://morshadunnur.me", // Optional
      avatar: "https://avatars.githubusercontent.com/u/11367467?v=4", // Optional
    }
  }
];
