const template = ({ id, url, width, args }, cssLink) => {
  return `
${cssLink}
<div style="display: flex;justify-content: center;align-items: center;width:100%;margin: 20px 0;">
  <div style="min-height: 32px;display: flex;justify-content: center;align-items: center;width:${width}">
    <div id="stop${id}" class="midibutton midistop"></div>
    <div id="play${id}" class="midibutton midiplay"></div>
    <div class="miditime" id="startTime${id}">00:00</div>
    <div id="line${id}" class="midiline">
      <div id="ball${id}" class="midiball"></div>
    </div>
    <div class="miditime" id="duration${id}">00:00</div>
  </div>
</div>
<script type='text/javascript' src="https://www.midijs.net/lib/midi.js" ${args.join(
    " "
  )}></script>
<script ${args.join(" ")}>
  function prefixAdd(num, length) {
    return (Array(length).join('0') + num).slice(-length);
  }
  function sec2min(sec) {
    return prefixAdd(parseInt(sec / 60), 2) + ":" + prefixAdd(parseInt(sec % 60), 2);
  }

  function callback${id}(event) {
    if (event.time - currentSecond${id} >= 1) {
      currentSecond${id} = event.time;
      startTime${id}.innerHTML = sec2min(event.time);
      ball${id}.style.left = event.time / durationSecond${id} * document.getElementById("line${id}").offsetWidth - 7.5 + 'px';
    }
    if (event.time >= durationSecond${id}) {
      ball${id}.style.left = "-7.5px";
      startTime${id}.innerHTML = "00:00";
      play${id}.className = "midibutton midiplay";
      isFirst${id} = true;
      isPlay${id} = false;
      currentSecond${id} = -1;
      currentPlayId = "";
    }
  }
  if (window.MIDIjs !== undefined) {
  var isWork = MIDIjs.get_audio_status().match(/WebAudio/);
  var url${id} = '${url}';
  var durationSecond${id} = 0;
  var currentSecond${id} = -1;
  var isFirst${id} = true;
  var isPlay${id} = false;
  var currentPlayId = "";
  var ball${id} = document.getElementById("ball${id}");
  var startTime${id} = document.getElementById("startTime${id}");
  var play${id} = document.getElementById("play${id}");

  play${id}.onclick = isWork ? function () {
    if (isFirst${id}) {
      MIDIjs.get_duration(url${id}, function (seconds) {
        durationSecond${id} = seconds;
        document.getElementById("duration${id}").innerHTML = sec2min(seconds);
      });

      MIDIjs.play(url${id});
      isFirst${id} = false;
      isPlay${id} = true;
      currentPlayId = '${id}';
      play${id}.className = "midibutton midipause";
    
      MIDIjs.player_callback = function(event) {
        callback${id}(event);
      }
    } else {
      if (isPlay${id}) {
        MIDIjs.pause();
        isPlay${id} = false;
        play${id}.className = "midibutton midiplay";
      } else {
        if(currentPlayId!='${id}') {
          ball${id}.style.left = "-7.5px";
          startTime${id}.innerHTML = "00:00";
          MIDIjs.play(url${id});
          currentPlayId = '${id}';
        } else {
          MIDIjs.resume();
        }
        isPlay${id} = true;
        play${id}.className = "midibutton midipause";

        MIDIjs.player_callback = function(event) {
          callback${id}(event);
        }
      }
    }
  } : null;
  document.getElementById("stop${id}").onclick = function () {
    MIDIjs.stop();
    ball${id}.style.left = "-7.5px";
    startTime${id}.innerHTML = "00:00";
    play${id}.className = "midibutton midiplay";
    isFirst${id} = true;
    isPlay${id} = false;
    currentSecond${id} = -1;
    currentPlayId = "${id}";
  }
  }
</script>`;
};

module.exports = template;
