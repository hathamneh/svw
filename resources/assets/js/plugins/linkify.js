import * as linkify from 'linkifyjs';

;
import linkifyHtml from 'linkifyjs/html';
import mention from 'linkifyjs/plugins/mention';
import hashtag from 'linkifyjs/plugins/hashtag';

mention(linkify);
hashtag(linkify);

// This is your plugin object. It can be exported to be used anywhere.
const LinkifyVue = {
    // The install method is all that needs to exist on the plugin object.
    // It takes the global Vue object as well as user-defined options.
    install(Vue, options) {
        // We call Vue.mixin() here to inject functionality into all components.
        let linkifyDefaults = {
            attributes: null,
            className: 'linkified',
            defaultProtocol: 'http',
            events: null,
            format: function (value, type) {
                return value;
            },
            formatHref: {
                hashtag: function (href) {
                    return '/search?s=' + href.substring(1);
                },
                mention: function (href) {
                    return '/search?s=' + href.substring(1);
                }

            },
            ignoreTags: [],
            nl2br: true,
            tagName: 'a',
            target: {
                url: '_blank'
            },
            validate: true
        };

        Vue.prototype.$linkify = function (str, options) {
            return linkifyHtml(str, _.assign({}, linkifyDefaults, options))
        }
    }
};

export default LinkifyVue;

