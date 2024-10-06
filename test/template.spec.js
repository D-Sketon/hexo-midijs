import { describe, it, expect } from "vitest";

const template = require("../lib/template");

describe("template", () => {
  it("default with args", () => {
    const args = ["arg1"];
    const result = template({
      id: "midijs1234",
      url: "url",
      width: "85%",
      args,
    });
    expect(result).toEqual(`
<div style="min-height: 32px;display: flex;justify-content: center;align-items: center;width:85%">
  <div id="stopmidijs1234" class="midibutton midistop"></div>
  <div id="playmidijs1234" class="midibutton midiplay"></div>
  <div class="miditime" id="startTimemidijs1234">00:00</div>
  <div id="linemidijs1234" class="midiline">
    <div id="ballmidijs1234" class="midiball"></div>
  </div>
  <div class="miditime" id="durationmidijs1234">00:00</div>
</div>
<script type='text/javascript' src="https://www.midijs.net/lib/midi.js" arg1></script>
<script arg1>
  function prefixAdd(num, length) {
    return (Array(length).join('0') + num).slice(-length);
  }
  function sec2min(sec) {
    return prefixAdd(parseInt(sec / 60), 2) + ":" + prefixAdd(parseInt(sec % 60), 2);
  }

  function callbackmidijs1234(event) {
    if (event.time - currentSecondmidijs1234 >= 1) {
      currentSecondmidijs1234 = event.time;
      startTimemidijs1234.innerHTML = sec2min(event.time);
      ballmidijs1234.style.left = event.time / durationSecondmidijs1234 * document.getElementById("linemidijs1234").offsetWidth - 7.5 + 'px';
    }
  }
  var isWork = MIDIjs.get_audio_status().match(/WebAudio/);
  var urlmidijs1234 = 'url';
  var durationSecondmidijs1234 = 0;
  var currentSecondmidijs1234 = -1;
  var isFirstmidijs1234 = true;
  var isPlaymidijs1234 = false;
  var currentPlayId = "";
  var ballmidijs1234 = document.getElementById("ballmidijs1234");
  var startTimemidijs1234 = document.getElementById("startTimemidijs1234");
  var playmidijs1234 = document.getElementById("playmidijs1234");

  playmidijs1234.onclick = isWork ? function () {
    if (isFirstmidijs1234) {
      MIDIjs.get_duration(urlmidijs1234, function (seconds) {
        durationSecondmidijs1234 = seconds;
        document.getElementById("durationmidijs1234").innerHTML = sec2min(seconds);
      });

      MIDIjs.play(urlmidijs1234);
      isFirstmidijs1234 = false;
      isPlaymidijs1234 = true;
      currentPlayId = 'midijs1234';
      playmidijs1234.className = "midibutton midipause";
    
      MIDIjs.player_callback = function(event) {
        callbackmidijs1234(event);
      }
    } else {
      if (isPlaymidijs1234) {
        MIDIjs.pause();
        isPlaymidijs1234 = false;
        playmidijs1234.className = "midibutton midiplay";
      } else {
        if(currentPlayId!='midijs1234') {
          ballmidijs1234.style.left = "-7.5px";
          startTimemidijs1234.innerHTML = "00:00";
          MIDIjs.play(urlmidijs1234);
          currentPlayId = 'midijs1234';
        } else {
          MIDIjs.resume();
        }
        isPlaymidijs1234 = true;
        playmidijs1234.className = "midibutton midipause";

        MIDIjs.player_callback = function(event) {
          callbackmidijs1234(event);
        }
      }
    }
  } : null;
  document.getElementById("stopmidijs1234").onclick = function () {
    MIDIjs.stop();
    ballmidijs1234.style.left = "-7.5px";
    startTimemidijs1234.innerHTML = "00:00";
    playmidijs1234.className = "midibutton midiplay";
    isFirstmidijs1234 = true;
    isPlaymidijs1234 = false;
    currentSecondmidijs1234 = -1;
    currentPlayId = "midijs1234";
  }
</script>`);
  });
});
