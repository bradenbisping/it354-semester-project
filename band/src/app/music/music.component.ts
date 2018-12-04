import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'bbvb-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor() { }

  ngOnInit()
  {
    $(document).ready(function() {
      const key = 'AIzaSyBzHwbi-2lF9IX__2auHl82XmLfrRSIzu4';
      const playlistId = 'PL9L24llVnyP-_LKauUHjTMxARK7yiW-G2';
      const URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
      const options = {
        part: 'snippet',
        key: key,
        maxResults: 25,
        playlistId: playlistId
      };

      loadVideos();

      function loadVideos()
      {
        $.getJSON(URL, options, function(data){
          console.log(data);
          const id = data.items[0].snippet.resourceId.videoId;
          mainVideo(id);
          resultsLoop(data);
        });
      }

      function mainVideo(id)
      {
        // .html needs to be changed to something that is actually in music.component.html and is equivalent to the original structure
        $('#video').html(`
          <iframe style="width: 560px; height: 315px;" src="https://www.youtube.com/embed/${id}" frameborder="0"
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
            <article class = "item" data-key = "${vid}" style="display: flex; align-items: center; padding: 8px 12px;
                                                              border: 2px solid white; border-radius: 8px; margin: 0 auto;">
                <img src="${thumbnail}" alt ="" class="thumbnail" style="height: 70px;">
                <div class = "details" style="padding: 8px 22px;">
                <h4 style="padding: 0; margin: 0; line-height: 1.3; font-weight: 600;">${title}</h4>
                <p style="padding: 0; margin: 0; line-height: 1.3; font-weight: 600; color: grey; font-size: 0.7rem;">${description}</p>
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
    });
  }

}
