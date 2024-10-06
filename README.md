<div align = center>
  <h1>hexo-minecraft-skin-viewer</h1>
  <img alt="NPM License" src="https://img.shields.io/npm/v/hexo-midijs">
  <img alt="NPM Version" src="https://img.shields.io/npm/v/hexo-midijs">
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dt/hexo-midijs">
  <p align="center">
  A hexo plugin to play MIDI files by MIDIjs.
  </p>

</div>

About midijs http://www.midijs.net/

Since midijs cannot play multiple MIDI files at the same time, hexo-midijs may not be stable enough.

## Install

```bash
$ npm install hexo-midijs --save
```

## Usage

```
{% midijs url [width=85%] [...other args] %}
{% endmidijs %}
```

e.g.

```
{% midijs './Smoking Dragon.mid' '400px' %}
{% endmidijs %}
```

### url

The url of the MIDI file (required)

### width

The width of the player (optional,default 85%)

### other args

Other arguments will be attached to the inserted `script` tag. For example, you can insert attributes such as `data-pjax`

## Example

[Demo](https://d-sketon.github.io/hexo-midijs/hexo-midijs/)
