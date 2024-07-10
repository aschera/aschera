import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface MediumItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  content: string;
  categories:[string]
  // Add more properties if needed
}

@Injectable({
  providedIn: 'root'
})
export class MediumService {

  private rssToJsonApiBaseUrl = 'https://api.rss2json.com/v1/api.json';
  private mediumRssUrl = 'https://medium.com/feed/@aschera'; // Replace with your Medium RSS feed URL

  constructor(private http: HttpClient) { }

  getPosts(): Observable<MediumItem[]> {
    const url = `${this.rssToJsonApiBaseUrl}?rss_url=${encodeURIComponent(this.mediumRssUrl)}`;
    return this.http.get<any>(url).pipe(
      map(response => {
        if (response && response.items) {
          return response.items.map((item: MediumItem) => ({
            title: item.title,
            link: item.link,
            categories: item.categories,
            content: item.content,
            description: item.description,
            pubDate: item.pubDate
          }));
        } else {
          return [];
        }
      })
    );
  }
}
