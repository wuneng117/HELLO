"use strict";
cc._RFpush(module, '97b2cKHFm5Aw7y0vU8kdrYO', 'monster');
// Script\monster.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        _player: null, //Player引用
        _idx: 0, //数组索引

        cardName: "",
        critical: 0,
        atk: 0,
        hp: 0,
        maxHp: 0,
        isAtked: true },

    //本回合是否攻击过
    //扣除HP
    reduceHp: function reduceHp(num) {
        if (num <= 0) return;

        this.hp -= num;
        //死了就杀掉这个随从
        if (this.isDead()) this._player.killMonster(this);

        this._player.refreshMonsterField();
    },

    //回复HP
    addHp: function addHp(num) {
        if (num <= 0) return;

        this.hp += num;
        if (this.hp > this.maxHp) this.hp = this.maxHp;

        this._player.refreshMonsterField();
    },

    isDead: function isDead() {
        if (this.hp <= 0) return true;
    },

    // use this for initialization
    onLoad: function onLoad() {},

    init: function init(card, player, idx) {
        this.cardName = card.cardName;
        this.critical = card.critical;
        this.atk = card.atk;
        this.hp = card.hp;
        this.maxHp = card.hp;

        this._player = player;
        this._idx = idx;
    },

    //更新编号
    refreshIdx: function refreshIdx(idx) {
        this._idx = idx;
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();