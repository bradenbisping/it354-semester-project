import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as $ from 'jquery';
import { Url, URL } from 'url';

@Component({
  selector: 'bbvb-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  // key = 'AIzaSyBzHwbi-2lF9IX__2auHl82XmLfrRSIzu4';
  // playlistId = 'PL9L24llVnyP-_LKauUHjTMxARK7yiW-G2';
  // url = 'https://www.googleapis.com/youtube/v3/playlistItems';
  // options = {
  //   part: 'snippet',
  //   key: this.key,
  //   maxResults: 25,
  //   playlistId: this.playlistId
  // };


  // key: string;
  // playlistId: string;
  // url: string;
  // options: {
  //   part: string,
  //   key: string,
  //   maxResults: number,
  //   playlistId: string
  // };
  // thumbnail: string;
  // title: string;
  // description: string;
  // vid: string;

  constructor()
  {
    // this.key = 'AIzaSyBzHwbi-2lF9IX__2auHl82XmLfrRSIzu4';
    // this.playlistId = 'PL9L24llVnyP-_LKauUHjTMxARK7yiW-G2';
    // this.url = 'https://www.googleapis.com/youtube/v3/playlistItems';
    // this.options = {
    //   part: 'snippet',
    //   key: this.key,
    //   maxResults: 25,
    //   playlistId: this.playlistId
    // };
  }

  ngOnInit()
  {
    const key = 'AIzaSyBzHwbi-2lF9IX__2auHl82XmLfrRSIzu4';
    const playlistId = 'PL9L24llVnyP-_LKauUHjTMxARK7yiW-G2';
    const url = 'https://www.googleapis.com/youtube/v3/playlistItems';
    const options = {
      part: 'snippet',
      key: key,
      maxResults: 25,
      playlistId: playlistId
    };

    loadVideos();

    function loadVideos()
    {
      $.getJSON(url, options, function(data){
        console.log(data);
        const id = data.items[0].snippet.resourceId.videoId;
        mainVideo(id);
        resultsLoop(data);
      });
    }

    function mainVideo(id)
    {
      $('#video').html(`
        <iframe style="width: 530px; height: 300px;" src="https://www.youtube.com/embed/${id}" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `);
    }

    function resultsLoop(data)
    {
      $.each(data.items, function(i, item)
      {
        const thumbnail = item.snippet.thumbnails.medium.url;
        const title = item.snippet.title;
        const description = item.snippet.description.substring(0, 100);
        const vid = item.snippet.resourceId.videoId;
        $('main').append(`
          <article class = "item" data-key = "${vid}">
              <img src="${thumbnail}" alt ="" id="thumbnail">
              <div id = "details">
                <h6>${title}</h6>
                <br>
              </div>
          </article>
        `);
      });
    }

    $('main').on('click', 'article', function()
    {
      const id = $(this).attr('data-key');
      mainVideo(id);
    });
  }
}
