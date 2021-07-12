import {Recorder} from '../js/recorder'
var record_btn = document.querySelector('#record') as HTMLDivElement
var play_btn = document.querySelector('#play') as HTMLDivElement
var pause_btn = document.querySelector('#pause') as HTMLDivElement
var stop_recording_btn = document.querySelector('#stop-recording') as HTMLDivElement

var recorder = new Recorder()
record_btn ? record_btn.onclick = () => {console.log('record clicked');recorder.record(); }: console.log('recorder_btn is null')

stop_recording_btn ? stop_recording_btn.onclick = () => recorder.stopRecording() : console.log('stop_record_btn is null')
