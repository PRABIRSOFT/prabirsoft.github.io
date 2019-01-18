<template>
  <v-content>
    <section>
      <v-parallax src="/images/about.png" height="600" dark>
        <v-layout
          align-center
          row
          justify-center
        >
        <v-flex sm8 md6 xs10>
          <v-card color="white" class="black--text">
            <v-container fill-height fluid>
              <v-layout row wrap>
                <v-flex sm6 md6 xs12>
                  <v-img
                    src="/images/pro_pic.webp"
                    height="100%"
                  ></v-img>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex sm6 md6 xs12>
                  <v-card-title>
                    <div>
                      <div class="headline"><h1 class="display-2 mb-3">Prabir Ghosh</h1></div>
                      <div><strong>Software Engineer</strong></div>
                      <div class="pt-3"><strong>Phone:</strong></div>
                      <div>+91-99-333-72215</div>
                      <div class="pt-3"><strong>Email:</strong></div>
                      <div>mymail.prabir@gmail.com</div>
                      <div class="pt-3"><strong>Address:</strong></div>
                      <div>Pumlia, Chakdaha,</div>
                      <div>Nadia, West Bengal,</div>
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
                  <v-btn flat icon color="black lighten-1" href="http://www.facebook.com/djprabir" target="_blank">
                    <v-icon color="black darken-2">mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn flat icon color="black lighten-1" href="http://www.twitter.com/djprabir" target="_blank">
                    <v-icon color="black darken-2">mdi-twitter</v-icon>
                  </v-btn>
                  <v-btn flat icon color="black lighten-1" href="https://www.linkedin.com/in/prabir-ghosh" target="_blank">
                    <v-icon color="black darken-2">mdi-linkedin</v-icon>
                  </v-btn>
                  <v-btn flat icon color="black lighten-1" href="https://github.com/PRABIRSOFT" target="_blank">
                    <v-icon color="black darken-2">mdi-github-circle</v-icon>
                  </v-btn>
                  <v-btn flat icon color="black lighten-1" href="http://plus.google.com/+PrabirGhoshGplus" target="_blank">
                    <v-icon color="black darken-2">mdi-google-plus</v-icon>
                  </v-btn>
                </v-layout>
              </v-card-actions>
          </v-card>
        </v-flex>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        row
        wrap
        class="my-5"
        align-center
        justify-center
      >
        <v-flex xs6 md6 sm12 class="my-3">
          <div class="text-xs-center">
            <div class="headline"><h1 class="display-2 mb3">Hello! I'm Prabir</h1></div>
            <br/>
            <br/>
            <div class="subheading">
              I have a few years of experience in machine learning with a bigger dream with "Artificial Intelligence". Currently, I work as a Software Developer at Ayata Prespective Solutions, improving products and developing software's for our customers by using CNS and machine learning, standing up machine learning analytical tools, creating and maintaining models, and on boarding compelling new data sets.
            </div>
            <br/>
            <br/>
            <div class="subheading">
              Previously, I was a student in Techno India Hooghly where I have completed my MCA degree.
            </div>
            <br/>
            <br/>
            <div class="subheading">
              Competencies: data science, machine learning, cloud computing, UI, Research, Python/Java/.Net/Android, network protocols
            </div>
          </div>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax src="/images/cimta.jpg" height="600">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Offline Signature Verification Using Pixel Matching Technique</div>
          <em>First International Conference on Computational Intelligence: Modeling Techniques and Applications (CIMTA) 2013 </em>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            href="https://www.sciencedirect.com/science/article/pii/S2212017313006075"
            target="_blank"
          >Read Article</v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        row
        wrap
        class="my-5"
        align-center
        justify-center
      >
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md3>
                <v-card class="elevation-0 transparent" flat>
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">school</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center font-weight-bold">2013-2016</div>
                  </v-card-title>
                  <v-card-text class="subheading">
                    <div><strong>Master of Computer Application</strong></div>
                    <div class="mt-2"><i><strong>Techno India-Hooghly</strong></i></div>
                    <div class="body-1">Grand Trunk Road, Near Khadina More, Dharampur, Chinsurah R S,</div>
                    <div class="body-1">Hooghly, West Bengal 712101</div>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md3>
                <v-card class="elevation-0 transparent" flat>
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">school</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center font-weight-bold">2010-2013</div>
                  </v-card-title>
                  <v-card-text class="subheading">
                    <div><strong>Bachelor's Degree in Science</strong></div>
                    <div class="mt-2"><i><strong>Santipur College</strong></i></div>
                    <div class="body-1">N.S Road, Santipur, Nadia,</div>
                    <div class="body-1">West Bengal 741404, University of Kalyani</div>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md3>
                <v-card class="elevation-0 transparent" flat>
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">school</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center font-weight-bold">2008-2010</div>
                  </v-card-title>
                  <v-card-text class="subheading">
                    <div><strong>High School</strong></div>
                    <div class="mt-2"><i><strong>Chakdaha Ramlal Academy</strong></i></div>
                    <div class="body-1">N.S. Road, Ward No. 9,</div>
                    <div class="body-1">Chakdaha, Nadia, West Bengal</div>
                    <div class="body-1">741222</div>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md3>
                <v-card class="elevation-0 transparent" flat>
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">school</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center font-weight-bold">2008</div>
                  </v-card-title>
                  <v-card-text class="subheading">
                    <div><strong>Madhyamik</strong></div>
                    <div class="mt-2"><i><strong>Chakdaha Ramlal Academy</strong></i></div>
                    <div class="body-1">N.S. Road, Ward No. 9,</div>
                    <div class="body-1">Chakdaha, Nadia, West Bengal</div>
                    <div class="body-1">741222</div>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax src="/images/github.webp" height="600">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Software development has never been easier</div>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            href="https://github.com/prabirsoft"
            target="_blank"
          >Follow Me On GitHub
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="">
          <v-flex xs12 sm6>
            <v-card class="elevation-0 transparent" flat>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Work & Experience</div>
              </v-card-title>
              <v-card-text>
                <v-list class="transparent" three-line>
                  <v-list-tile three-line>
                    <v-list-tile-action>
                      <v-icon class="black--text text--lighten-2">work</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title class="font-weight-bold title">Software Developer</v-list-tile-title>
                      <v-list-tile-sub-title v-html="companyInfo1" class="caption"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
                <v-list class="transparent" three-line>
                  <v-list-tile three-line>
                    <v-list-tile-action>
                      <v-icon class="black--text text--lighten-2">work</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title class="font-weight-bold title">Founder</v-list-tile-title>
                      <v-list-tile-sub-title v-html="companyInfo2" class="caption"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent" flat>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact me</div>
              </v-card-title>
              <v-card-text>
                <v-layout justify-center>
                  <v-btn flat icon color="black lighten-1" href="http://www.facebook.com/djprabir" target="_blank">
                    <v-icon color="black darken-2">mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn flat icon color="black lighten-1" href="http://www.twitter.com/djprabir" target="_blank">
                    <v-icon color="black darken-2">mdi-twitter</v-icon>
                  </v-btn>
                  <v-btn flat icon color="black lighten-1" href="https://www.linkedin.com/in/prabir-ghosh" target="_blank">
                    <v-icon color="black darken-2">mdi-linkedin</v-icon>
                  </v-btn>
                  <v-btn flat icon color="black lighten-1" href="https://github.com/PRABIRSOFT" target="_blank">
                    <v-icon color="black darken-2">mdi-github-circle</v-icon>
                  </v-btn>
                  <v-btn flat icon color="black lighten-1" href="http://plus.google.com/+PrabirGhoshGplus" target="_blank">
                    <v-icon color="black darken-2">mdi-google-plus</v-icon>
                  </v-btn>
                </v-layout>
                <v-divider></v-divider>
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="black--text text--lighten-2">person</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Prabir Ghosh</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="black--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>+91-99-333-72215</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="black--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Kolkata, IN</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="black--text text--lighten-2" href="mailto:mymail.prabir@gmail.com" target="_blank">email</v-icon>
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
    return {
      companyInfo1: '<strong>DataInfoCom Software Solutions Pvt. Ltd.</strong></br><i>12/3/4 Jamir Lane, "Bidhisha", First Floor,</br>Kolkata-700 019, West Bengal, India</i>',
      companyInfo2: '<strong>TwoGP Solutions</strong></br><i>An Open Source non-profitable organization</br><a href="https://www.twogp.com" target="_blank">https://www.twogp.com</a></i>'
    }
  },
  components: {
    Footer: Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: white;
}
</style>
