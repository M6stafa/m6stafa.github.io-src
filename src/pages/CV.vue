<template>
  <q-page>
    <div id="cv" class="row q-col-gutter-sm">
      <!-- Left Column -->
      <div
        id="left-column"
        class="window-height-min col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 q-py-lg"
      >
        <q-list class="row">
          <!-- Picture and Name -->
          <q-item class="col-12 col-sm-6 col-md-12">
            <q-item-section class="flex flex-center row text-center">
              <q-img
                id="me-image"
                src="statics/images/me.png"
              />
              <h4 class="q-my-md">{{ $t('cv.fullName') }}</h4>
            </q-item-section>
          </q-item>
          <!-- End Picture and Name -->

          <!-- Basic Infos -->
          <q-separator v-if="!$q.screen.sm" inset />
          <q-item class="col-12 col-sm-6 col-md-12">
            <q-list dense class="full-width">
              <q-item
                v-for="(info, index) in $t('cv.basicInfos')"
                :key="`basicInfo${index}`"
                :class="`${!info.printable ? 'not-print' : ''} basic-info`"
              >
                <q-item-section avatar>
                  <q-icon :name="info.icon" />
                </q-item-section>
                <q-item-section class="ellipsis text-bold" v-html="info.text" />
              </q-item>

              <!-- Socials -->
              <q-item id="socials" class="justify-center">
                <q-item-section
                  v-for="(social, socialIndex) in $t('cv.socials')"
                  :key="`social${socialIndex}`"
                  class="col-shrink"
                >
                  <q-btn
                    flat
                    round
                    :style="{ 'background-color': social.bgColor }"
                    :icon="social.icon"
                    :href="social.link"
                    target="_blank"
                    type="a"
                  />
                </q-item-section>
              </q-item>
              <!-- End Socials -->
            </q-list>
          </q-item>
          <!-- End Basic Infos -->

          <!-- Skills -->
          <q-separator inset />
          <q-item class="col-12 q-pb-md">
            <q-item-section class="block q-px-md">
              <h6>{{ $t('cv.skillsTitle') }}</h6>
              <span
                v-for="(skillItems, skillItemsIndex) in $t('cv.skills')"
                :key="`skills${skillItemsIndex}`"
              >
                <q-chip
                  v-for="(skill, skillIndex) in skillItems.items"
                  :key="`skills${skillItemsIndex}-${skillIndex}`"
                  :class="skillItems.class"
                  dense
                >
                  {{ skill }}
                </q-chip>
                <br>
              </span>
            </q-item-section>
          </q-item>
          <!-- End Skills -->

          <!-- Interests -->
          <q-separator inset />
          <q-item class="col-12 q-pb-md">
            <q-item-section class="block q-px-md">
              <h6>{{ $t('cv.interestsTitle') }}</h6>
              <q-chip
                v-for="(interest, interestIndex) in $t('cv.interests')"
                :key="`interest${interestIndex}`"
                :class="interest.class"
                dense
              >
                {{ interest.text }}
              </q-chip>
            </q-item-section>
          </q-item>
          <!-- End Interests -->

          <!-- Personality -->
          <q-separator inset />
          <q-item class="col-12">
            <q-item-section class="block q-px-md">
              <h6>{{ $t('cv.personalityTitle') }}</h6>
              <q-btn
                v-for="(personality, personalityIndex) in $t('cv.personalities')"
                :key="`personality${personalityIndex}`"
                flat
                rounded
                :class="personality.class + ' q-ml-sm q-mt-sm'"
                :href="personality.link"
                target="_blank"
                type="a"
              >
                {{ personality.text }}
              </q-btn>
            </q-item-section>
          </q-item>
          <!-- End Personality -->
        </q-list>
      </div>
      <!-- End Left Column -->

      <!-- Right Column -->
      <div
        id="right-column"
        class="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9 q-pa-lg q-pr-xl"
      >
        <!-- Sections -->
        <q-timeline color="secondary" :layout="timelineLayout">
          <template
            v-for="(section, sectionIndex) in $t('cv.sections')"
            id="education"
          >
            <q-timeline-entry :key="`header${sectionIndex}`" heading>
              <span class="section-title">{{ section.title }}</span>
            </q-timeline-entry>

            <q-timeline-entry
              v-for="(item, itemIndex) in section.items"
              :key="`section${sectionIndex}-item${itemIndex}`"
              class="section-item no-break-inside"
            >
              <template v-slot:title>
                <b v-html="item.title" />
              </template>
              <template v-slot:subtitle>
                <span class="text-body1" v-html="item.date" />
              </template>

              <p
                v-if="item.location"
                class="text-body1"
                v-html="`${item.location}`"
              />
              <p
                v-if="item.description"
                class="text-body1 text-justify"
                v-html="item.description"
              />
            </q-timeline-entry>
          </template>
          <q-timeline-entry heading />

          <q-resize-observer @resize="onTimelineResize" />
        </q-timeline>
        <!-- End Sections -->
      </div>
      <!-- End Right Column -->
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'CV',

  data() {
    return {
      timelineWidth: 600,
    };
  },

  computed: {
    timelineLayout() {
      return this.timelineWidth > this.$q.screen.sizes.md ? 'comfortable' : 'dense';
    },
  },

  mounted() {
    document.title = this.$t('cv.documentTitle');
  },

  methods: {
    onTimelineResize(size) {
      this.timelineWidth = size.width;
    },
  },
};
</script>

<style lang="scss" scoped>
$color-1: #0A1826;
$color-2: #F4FFFD;
$color-3: #C21F40;
$color-4: #ED254E;
$color-5: #F9DC5C;


#cv {
  -webkit-print-color-adjust: exact;
}

#socials {
  flex-wrap: wrap;
  padding-top: $flex-gutter-md;
  padding-bottom: $flex-gutter-sm;
}

#left-column {
  background-color: $color-1;
  color: $color-2;

  & .q-separator {
    background-color: $color-5;
  }

  & .basic-info .q-icon {
    color: $color-4;
  }
}

#right-column {
  background-color: white;
  color: $color-1;

  & .section-title {
    color: $color-3;
  }
}

#me-image {
  border-radius: 100%;
  max-width: 150px;
}
</style>

<style lang="scss">
#cv {
  & .q-timeline--comfortable .q-timeline__subtitle {
    width: 190px;
  }

  & .q-timeline h6 {
    line-height: 1.4em;
  }
}
</style>
