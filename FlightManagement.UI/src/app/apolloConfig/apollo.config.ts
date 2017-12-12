import {NgModule} from '@angular/core';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';

import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';


@NgModule({
  exports: [
    // 2
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class GraphQLModule {
    constructor(apollo: Apollo, httpLink: HttpLink) {
        const uri = 'https://api.graph.cool/simple/v1/cjah13ktk0dl10191w2w64tce';
        const http = httpLink.create({ uri });
        apollo.create({
            link: http,
            cache: new InMemoryCache()
          });

    }

}
