const midiTemplate = ({ id, url, width }) => {
    return `
    <div style="min-height: 32px;display: flex;justify-content: center;align-items: center;width:${width}">
        <div id="stop${id}" class="midibutton midistop"></div>
        <div id="play${id}" class="midibutton midiplay"></div>
        <div class="miditime" id="startTime${id}">00:00</div>
        <div id="line${id}" class="midiline">
            <div id="ball${id}" class="midiball"></div>
        </div>
    <div class="miditime" id="duration${id}">00:00</div>
    </div>
    <script>
        function prefixAdd(num, length) {
            return (Array(length).join('0') + num).slice(-length);
        }
        function sec2min(sec) {
            return prefixAdd(parseInt(sec / 60), 2) + ":" + prefixAdd(parseInt(sec % 60), 2);
        }

        function callback${id}(event) {
            if (event.time - current_second${id} >= 1) {
                current_second${id} = event.time;
                startTime${id}.innerHTML = sec2min(event.time);
                ball${id}.style.left = event.time / duration_second${id} * document.getElementById("line${id}").offsetWidth - 7.5 + 'px';
            }
        }
        var isWork = MIDIjs.get_audio_status().match(/WebAudio/);;
        var url${id} = '${url}';
        var duration_second${id} = 0;
        var current_second${id} = -1;
        var isFirst${id} = true;
        var isPlay${id} = false;
        var currentPlayId = "";
        var ball${id} = document.getElementById("ball${id}");
        var startTime${id} = document.getElementById("startTime${id}");
        var play${id} = document.getElementById("play${id}");
        setTimeout(() => {
        play${id}.onclick = isWork ? function () {
            if (isFirst${id}) {
                //get_duration
                MIDIjs.get_duration(url${id}, function (seconds) {
                    duration_second${id} = seconds;
                    document.getElementById("duration${id}").innerHTML = sec2min(seconds);
                });

                MIDIjs.play(url${id});
                isFirst${id} = false;
                isPlay${id} = true;
                currentPlayId = '${id}';
                play${id}.style.background = 'url("/source/midijs_button.png") -32px 0 no-repeat';
                play${id}.style.backgroundColor = 'rgb(202, 202, 202)';
                
                MIDIjs.player_callback = function(event) {
                    callback${id}(event);
                }
            } else {
                if (isPlay${id}) {
                    MIDIjs.pause();
                    isPlay${id} = false;
                    play${id}.style.background = 'url("/source/midijs_button.png") 0 0 no-repeat';
                    play${id}.style.backgroundColor = 'rgb(202, 202, 202)';
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
                    play${id}.style.background = 'url("/source/midijs_button.png") -32px 0 no-repeat';
                    play${id}.style.backgroundColor = 'rgb(202, 202, 202)';

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
            play${id}.style.background = 'url("/source/midijs_button.png") 0 0 no-repeat';
            play${id}.style.backgroundColor = 'rgb(202, 202, 202)';
            isFirst${id} = true;
            isPlay${id} = false;
            current_second${id} = -1;
            currentPlayId = '${id}';
        }
        }, 500);
    </script>`
}

module.exports = { midiTemplate }