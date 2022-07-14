const cmd = ["nix-shell", "-p", "mpv", "--run", `mpv --loop-playlist=inf --volume=65 music`];//["nix-shell", "-p", "mpv", "--run", `mpv --loop-playlist=inf --volume=65 music`];
// ["nix-shell", "-p", "mpv", "--run", `edge-playback --voice ar-EG-SalmaNeural --text "مرحبا كيف حالك؟"`]

// create subprocess
const p = Deno.run({ cmd, stdout: "null",
stderr: "piped" });

// await its completion
await p.status();
// needs to be quit after x number of seconds, otherwise it just keeps going???
//const cmd2 = ["nix-shell", "-p", "mpv", "--run", `edge-playback --voice ar-EG-SalmaNeural --text "مرحبا كيف حالك؟"`]

//TODO: shell command that gets the md5 hash of the sentence, looks for an audio file (stream from github?), dl? clean up afterwards?, and queues it to play after the user presses enter

// for estimating vocab size: sort every sentence by average frequency. sample a few from each step of 100 + their translations. (might also be a cheaper alternative to minifying everything). quiz the users on that. write a rust script to do it. not straightforward for japanese, chinese, just detect those and skip them. represent as a fallible Maybe? 