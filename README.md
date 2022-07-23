# hexo-midijs
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