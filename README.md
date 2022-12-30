# hexo-midijs
![](https://img.shields.io/npm/v/hexo-midijs)   ![](https://img.shields.io/npm/dt/hexo-midijs)

A hexo plugin to play MIDI files by MIDIjs.

About midijs http://www.midijs.net/

Because midijs cannot play multiple MIDI files at the same time, hexo-midijs may have many bugs.


## Install 

```bash
$ npm install hexo-midijs --save
```

## Usage

```
{% midijs './Smoking Dragon.mid' '400px' %}
{% endmidijs %}
```
The first parameter represents the url of the MIDI file (required)

The second parameter represents the width of the player (optional,default 85%)

## Example

[Demo](https://d-sketon.github.io/hexo-midijs/2022/12/30/MIDI%E9%85%8D%E5%B8%83/)
