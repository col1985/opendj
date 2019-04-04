/**
 * Playlist Service
 * OpenDJ Playlist Service incl. Voting
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Playlist } from '../model/playlist';
import { Playlists } from '../model/playlists';
import { Track } from '../model/track';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PlaylistsService {

    protected basePath = 'http://playlist-dfroehli-opendj-dev.apps.ocp1.hailstorm5.coe.muc.redhat.com/api/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Get firstTrack with given playlist ID
     *
     * @param playlistId ID of playlist that we want to use to get its first track
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFirstTrackPlaylistIdGet(playlistId: string, observe?: 'body', reportProgress?: boolean): Observable<Track>;
    public getFirstTrackPlaylistIdGet(playlistId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Track>>;
    public getFirstTrackPlaylistIdGet(playlistId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Track>>;
    public getFirstTrackPlaylistIdGet(playlistId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (playlistId === null || playlistId === undefined) {
            throw new Error('Required parameter playlistId was null or undefined when calling getFirstTrackPlaylistIdGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/getFirstTrack/${encodeURIComponent(String(playlistId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all playlists in system
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public playlistsGet(observe?: 'body', reportProgress?: boolean): Observable<Playlists>;
    public playlistsGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Playlists>>;
    public playlistsGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Playlists>>;
    public playlistsGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/playlists`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete Playlist with given ID
     *
     * @param playlistId ID of playlist that we want to find
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public playlistsPlaylistIdDelete(playlistId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public playlistsPlaylistIdDelete(playlistId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public playlistsPlaylistIdDelete(playlistId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public playlistsPlaylistIdDelete(playlistId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (playlistId === null || playlistId === undefined) {
            throw new Error('Required parameter playlistId was null or undefined when calling playlistsPlaylistIdDelete.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete(`${this.basePath}/playlists/${encodeURIComponent(String(playlistId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get firstTrack with given playlist ID
     *
     * @param playlistId ID of playlist that we want to use to get its first track
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public playlistsPlaylistIdFirstTrackGet(playlistId: string, observe?: 'body', reportProgress?: boolean): Observable<Track>;
    public playlistsPlaylistIdFirstTrackGet(playlistId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Track>>;
    public playlistsPlaylistIdFirstTrackGet(playlistId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Track>>;
    public playlistsPlaylistIdFirstTrackGet(playlistId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (playlistId === null || playlistId === undefined) {
            throw new Error('Required parameter playlistId was null or undefined when calling playlistsPlaylistIdFirstTrackGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/playlists/${encodeURIComponent(String(playlistId))}/firstTrack`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get playlist with given ID
     *
     * @param playlistId ID of playlist that we want to find
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public playlistsPlaylistIdGet(playlistId: string, observe?: 'body', reportProgress?: boolean): Observable<Playlist>;
    public playlistsPlaylistIdGet(playlistId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Playlist>>;
    public playlistsPlaylistIdGet(playlistId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Playlist>>;
    public playlistsPlaylistIdGet(playlistId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (playlistId === null || playlistId === undefined) {
            throw new Error('Required parameter playlistId was null or undefined when calling playlistsPlaylistIdGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/playlists/${encodeURIComponent(String(playlistId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update Playlist with give ID
     *
     * @param playlistId ID of playlist that we want to find
     * @param body Playlist with new values of properties
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public playlistsPlaylistIdPut(playlistId: string, body?: Playlist, observe?: 'body', reportProgress?: boolean): Observable<Playlist>;
    public playlistsPlaylistIdPut(playlistId: string, body?: Playlist, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Playlist>>;
    public playlistsPlaylistIdPut(playlistId: string, body?: Playlist, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Playlist>>;
    public playlistsPlaylistIdPut(playlistId: string, body?: Playlist, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (playlistId === null || playlistId === undefined) {
            throw new Error('Required parameter playlistId was null or undefined when calling playlistsPlaylistIdPut.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put(`${this.basePath}/playlists/${encodeURIComponent(String(playlistId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete track in playlist ID
     *
     * @param playlistId ID of playlist that we want to find
     * @param resourceURI ID of a track that we want to find
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public playlistsPlaylistIdTracksResourceURIDelete(playlistId: string, resourceURI: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public playlistsPlaylistIdTracksResourceURIDelete(playlistId: string, resourceURI: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public playlistsPlaylistIdTracksResourceURIDelete(playlistId: string, resourceURI: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public playlistsPlaylistIdTracksResourceURIDelete(playlistId: string, resourceURI: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (playlistId === null || playlistId === undefined) {
            throw new Error('Required parameter playlistId was null or undefined when calling playlistsPlaylistIdTracksResourceURIDelete.');
        }
        if (resourceURI === null || resourceURI === undefined) {
            throw new Error('Required parameter resourceURI was null or undefined when calling playlistsPlaylistIdTracksResourceURIDelete.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete(`${this.basePath}/playlists/${encodeURIComponent(String(playlistId))}/tracks/${encodeURIComponent(String(resourceURI))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Create new playlist in system
     * @param body Playlist that we want to create
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public playlistsPost(body?: Playlist, observe?: 'body', reportProgress?: boolean): Observable<Playlist>;
    public playlistsPost(body?: Playlist, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Playlist>>;
    public playlistsPost(body?: Playlist, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Playlist>>;
    public playlistsPost(body?: Playlist, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post(`${this.basePath}/playlists`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }
}
