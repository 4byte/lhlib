var _0x14a6 = ['Export\x20your\x20contacts\x20into\x20CSV\x20file\x20for\x20Google\x20Sheet\x20or\x20Microsoft\x20Excel',
    'Endorse\x20your\x20contacts\x20to\x20get\x20endorsements\x20in\x20return',
    'https://medium.com/linked-helper/boost-your-profile-and-get-hundreds-of-endorsements-from-other-users-in-no-time-automatically-b75758237a0f',
    'Automatically\x20add\x20your\x20signature\x20to\x20manually\x20created\x20messages', 'Profiles\x20auto-visiting',
    'Sent\x20pending\x20invites\x20bulk\x20canceller',
    'https://medium.com/linked-helper/how-to-cancel-withdraw-all-my-sent-pending-invites-connection-requests-in-linkedin-39b8be9ba3ad?source=---------0-----------',
    '<p>This\x20tool\x20can:</p>',
    'How\x20to\x20manage\x20Collected\x20Recipients\x20(Recipients\x20Queue),\x20Processed\x20Recipients\x20and\x20Excluded\x20Contacts\x20for\x20message\x20broadcast\x20to\x201st\x20connections',
    'How\x20to\x20manage\x20broadcasts\x20to\x20LinkedIn\x201st\x20connections\x20-\x20creating\x20messages\x20chains',
    'https://medium.com/linked-helper/how-to-manage-broadcasts-to-linkedin-1st-connections-creating-messages-chains-61f746389009',
    'https://medium.com/linked-helper/how-to-collect-all-your-1st-connections-for-message-broadcast-f4b178928759',
    'How\x20to\x20collect\x20all\x201st\x20connections', '<p>You\x20can\x20create\x20Message\x20sequences:</p>',
    '<ul\x20style=\x22list-style-type:\x20none;\x20padding-left:\x200em;\x22>', 'length', '<li>', 'url', 'text',
    '</li>', '</ul>', '<a\x20href=\x22', '</a>', 'log', 'my\x20popup\x20js', 'push', '_setAccount', 'UA-90253398-1',
    '_trackPageview', 'script', 'async', 'src', 'https://ssl.google-analytics.com/ga.js', 'getElementsByTagName',
    'insertBefore', 'jim_country_code', 'undefined', 'setup_country_code_and_sale', 'attr', 'get_sale_by_country_code',
    'CONST_DEFAULT_SALES_MODE', 'on_country_code_defined', 'country_code', '#links_block', 'append',
    'HOW\x20TO\x20NOT\x20LOSE\x20YOUR\x20DATA',
    'https://medium.com/linked-helper/important-linked-helper-data-storage-2a8d73a38e0d',
    'https://medium.com/linked-helper/how-to-backup-restore-your-linked-helper-data-f832fdfcc334',
    'Recommended\x20daily\x20limits',
    'https://medium.com/linked-helper/what-kind-of-limits-should-i-use-88df661c6cf0?source=---------6-----------',
    'HOW\x20TO', 'https://medium.com/linked-helper/tagged/how-to', 'FAQ', 'https://medium.com/linked-helper/tagged/faq',
    'Solutions\x20for\x20common\x20issues',
    '<div\x20id=\x22links_important\x22\x20style=\x22font-weight:\x20bold;\x20margin-top:\x201em;\x20margin-bottom:\x201em\x22>',
    '<p>Please\x20read\x20carefully:</p>', '</div>',
    'https://medium.com/linked-helper/collect-select-invite-2nd-3rd-linkedin-connections-4f9d41628467',
    'Send\x20personalized\x20messages\x20and\x20message\x20sequences\x20to\x201st\x20connections',
    'https://medium.com/linked-helper/how-to-send-your-messages-to-your-linkedin-1st-connections-mailing-system-message-broadcast-8d6d0308516e'];
(function (_0x242ecc, _0x528af0) {
    var _0x1e1be8 = function (_0x1efd91) {
        while (--_0x1efd91) {
            _0x242ecc['push'](_0x242ecc['shift']());
        }
    };
    _0x1e1be8(++_0x528af0);
}(_0x14a6, 0x148));
var _0x1173 = function (_0x4201e8, _0x5a166a) {
    _0x4201e8 = _0x4201e8 - 0x0;
    var _0x171ae2 = _0x14a6[_0x4201e8];
    return _0x171ae2;
};
console[_0x1173('0x0')](_0x1173('0x1'));
var _gaq = _gaq || [];
_gaq[_0x1173('0x2')]([_0x1173('0x3'), _0x1173('0x4')]);
_gaq[_0x1173('0x2')]([_0x1173('0x5')]);
(function () {
    var _0x2550aa = document['createElement'](_0x1173('0x6'));
    _0x2550aa['type'] = 'text/javascript';
    _0x2550aa[_0x1173('0x7')] = !![];
    _0x2550aa[_0x1173('0x8')] = _0x1173('0x9');
    var _0x1fdc0a = document[_0x1173('0xa')](_0x1173('0x6'))[0x0];
    _0x1fdc0a['parentNode'][_0x1173('0xb')](_0x2550aa, _0x1fdc0a);
    add_links();
}());
var jim = {
    'CONST_DEFAULT_SALES_MODE': 'DEFAULT', 'sales_modes': {}, 'init': function () {
        if (localStorage[_0x1173('0xc')] && localStorage[_0x1173('0xc')] != '' && localStorage['jim_country_code'] !=
            _0x1173('0xd')) {
            this[_0x1173('0xe')](localStorage[_0x1173('0xc')]);
        } else {
        }
    }, 'request_position': function () {
    }, 'setup_country_code_and_sale': function (_0x5baf05) {
        var _0x25b7d8 = $('body');
        _0x25b7d8['attr']('data-country_code', _0x5baf05);
        _0x25b7d8[_0x1173('0xf')]('data-sale-mode', this[_0x1173('0x10')](_0x5baf05));
    }, 'get_sale_by_country_code': function (_0x2c357a) {
        var _0x16ef6f = this['sales_modes'][_0x2c357a];
        if (_0x16ef6f) return _0x16ef6f; else return this[_0x1173('0x11')];
    }, 'on_request_position': function (_0x82d41d) {
        console['log'](_0x82d41d);
        this[_0x1173('0x12')](_0x82d41d[_0x1173('0x13')]);
    }, 'on_country_code_defined': function (_0xa884d4) {
        localStorage['jim_country_code'] = _0xa884d4;
        this[_0x1173('0xe')](_0xa884d4);
    }
};
jim['init']();

function add_links() {
    var _0x196819 = $(_0x1173('0x14'));
    _0x196819['append']($(build_links_this_tool_can()));
    _0x196819[_0x1173('0x15')]($(build_links_main_feature()));
    _0x196819[_0x1173('0x15')]($(build_links_important()));
}

function build_links_important() {
    var _0x488e2a = [{'text': _0x1173('0x16'), 'url': _0x1173('0x17')},
        {'text': 'How\x20To\x20backup\x20&\x20restore\x20your\x20Linked\x20Helper\x20Data', 'url': _0x1173('0x18')},
        {'text': _0x1173('0x19'), 'url': _0x1173('0x1a')}, {'text': _0x1173('0x1b'), 'url': _0x1173('0x1c')},
        {'text': _0x1173('0x1d'), 'url': _0x1173('0x1e')},
        {'text': _0x1173('0x1f'), 'url': 'https://medium.com/linked-helper/solutions-for-common-issues-75047b5d1e2e'}];
    var _0x245b90 = _0x1173('0x20');
    _0x245b90 += _0x1173('0x21');
    _0x245b90 += build_href_list(_0x488e2a, !![]);
    _0x245b90 += _0x1173('0x22');
    return _0x245b90;
}

function build_links_this_tool_can() {
    var _0x1f812d = [{
        'text': 'Automatically\x20send\x20personalised\x20invitations\x20(connection\x20requests)\x20to\x20targeted\x202nd\x20&\x203rd\x20contacts',
        'url': _0x1173('0x23')
    }, {'text': _0x1173('0x24'), 'url': _0x1173('0x25')}, {
        'text': _0x1173('0x26'),
        'url': 'https://medium.com/linked-helper/export-your-contacts-to-csv-file-build-mailing-list-only-for-new-linkedin-interface-2c0327b18716'
    }, {'text': _0x1173('0x27'), 'url': _0x1173('0x28')}, {
        'text': _0x1173('0x29'),
        'url': 'https://medium.com/linked-helper/automatically-add-your-signature-to-new-messages-61574a394b02'
    }, {
        'text': _0x1173('0x2a'),
        'url': 'https://medium.com/linked-helper/auto-visit-profiles-to-get-look-back-8fe2aa4be7a9'
    }, {'text': _0x1173('0x2b'), 'url': _0x1173('0x2c')}];
    var _0x541ef4 = _0x1173('0x20');
    _0x541ef4 += _0x1173('0x2d');
    _0x541ef4 += build_href_list(_0x1f812d, ![]);
    _0x541ef4 += _0x1173('0x22');
    return _0x541ef4;
}

function build_links_main_feature() {
    var _0x2c7dec = [{
        'text': 'How\x20to\x20send\x20your\x20messages\x20to\x20your\x20LinkedIn\x201st\x20connections',
        'url': _0x1173('0x25')
    }, {
        'text': _0x1173('0x2e'),
        'url': 'https://medium.com/linked-helper/how-to-manage-collected-recipients-recipients-queue-processed-recipients-and-excluded-contacts-580d53f6ee63'
    }, {'text': _0x1173('0x2f'), 'url': _0x1173('0x30')},
        {'text': 'How\x20to\x20send\x20messages\x20to\x20recently\x20added\x20connections', 'url': _0x1173('0x31')}, {
            'text': _0x1173('0x32'),
            'url': 'https://medium.com/linked-helper/how-to-collect-all-your-1st-connections-for-message-broadcast-f4b178928759'
        }];
    var _0x4c3f6e = '<div\x20id=\x22links_important\x22\x20style=\x22font-weight:\x20bold;\x20margin-top:\x201em;\x20margin-bottom:\x201em\x22>';
    _0x4c3f6e += _0x1173('0x33');
    _0x4c3f6e += build_href_list(_0x2c7dec, ![]);
    _0x4c3f6e += _0x1173('0x22');
    return _0x4c3f6e;
}

function build_href_list(_0xef496d, _0x189b6e) {
    var _0x333a90 = _0x1173('0x34');
    for (var _0x5805b1 = 0x0, _0x4b0413 = 0x1, _0x3ca73a; _0x5805b1 < _0xef496d[_0x1173('0x35')];
         _0x5805b1++, _0x4b0413++) {
        _0x3ca73a = _0xef496d[_0x5805b1];
        _0x333a90 += _0x1173('0x36') + _0x4b0413 + ')\x20' +
            build_href(_0x3ca73a[_0x1173('0x37')], _0x3ca73a[_0x1173('0x38')], _0x189b6e) + _0x1173('0x39');
    }
    _0x333a90 += _0x1173('0x3a');
    return _0x333a90;
}

function build_href(_0x1627b6, _0x24cd2d, _0x54af41) {
    var _0x133909;
    if (_0x54af41) _0x133909 = 'style=\x22color:\x20red;\x20font-weight:\x20bold\x22'; else _0x133909 = '';
    return _0x1173('0x3b') + _0x1627b6 + '\x22\x20target=\x22_blank\x22\x20' + _0x133909 + '>' + _0x24cd2d +
        _0x1173('0x3c');
}
