<template>
  <v-content>
    <section>
      <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="576" dark>
        <v-layout
          align-center
          column
          justify-center
        >
          <v-card color="white" class="black--text" width="700px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs5>
                  <v-card-media
                    src="/static/pro_pic.webp"
                    height="300px"
                  ></v-card-media>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs6>
                  <v-card-title>
                    <div>
                      <div class="headline"><h1 class="display-2 mb-3">Prabir Ghosh</h1></div>
                      <div><strong>to be added soon...</strong></div>
                      <div class="pt-3"><strong>Phone:</strong></div>
                      <div>+91 993 33 72215</div>
                      <div class="pt-3"><strong>Email:</strong></div>
                      <div>mymail.prabir@gmail.com</div>
                      <div class="pt-3"><strong>Address:</strong></div>
                      <div>Pumlia, Chakdaha,</div>
                      <div>Nadia, WestBengal,</div>
                      <div>India-741222</div>
                      <div>Date of Birth:</div>
                      <div>November 24th, 1992</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
              <v-card-actions class="pa-3">
                <v-layout justify-center>
                  <v-btn flat icon color="black lighten-1" href="http://www.facebook.com/djprabir">
                    <v-icon color="black darken-2">mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn flat icon color="black lighten-1" href="http://www.twitter.com/djprabir">
                    <v-icon color="black darken-2">mdi-twitter</v-icon>
                  </v-btn>
                  <v-btn flat icon color="black lighten-1" href="https://www.linkedin.com/in/prabir-ghosh">
                    <v-icon color="black darken-2">mdi-linkedin</v-icon>
                  </v-btn>
                  <v-btn flat icon color="black lighten-1" href="https://github.com/PRABIRSOFT">
                    <v-icon color="black darken-2">mdi-github-circle</v-icon>
                  </v-btn>
                  <v-btn flat icon color="black lighten-1" href="http://plus.google.com/+PrabirGhoshGplus">
                    <v-icon color="black darken-2">mdi-google-plus</v-icon>
                  </v-btn>
                </v-layout>
              </v-card-actions>
          </v-card>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">The best way to start developing</h2>
            <span class="subheading">
              Cras facilisis mi vitae nunc
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Material Design</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Fast development</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Completely Open Sourced</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
          <em>Kick-start your application today</em>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
          >
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                to be added soon...
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact me</div>
              </v-card-title>
              <v-card-text>
                <div>Prabir Ghosh</div>
                <div>Software Developer</div>
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>+91-99-333-72215</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Kolkata, IN</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>mymail.prabir@gmail.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <Footer></Footer>
  </v-content>
</template>

<script>
import Footer from './Footer'

export default {
  data () {
    return {}
  },
  components: {
    Footer: Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
