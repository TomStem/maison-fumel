<script setup lang="ts">
import DatePicker from 'primevue/datepicker';
import { usePrimeVue } from 'primevue/config';

defineOptions({
  name: 'BookNowPage',
});

type AvailabilityStatus = 'booked' | 'option' | 'available';
type SupportedLocale = 'nl' | 'fr' | 'en-gb';

interface CalendarDate {
  year: number;
  month: number;
  day: number;
}

interface MonthConfig {
  minDate: string;
}

interface CalendarConfig {
  availability: Record<string, AvailabilityStatus>;
  months?: MonthConfig[];
}

interface PricingPeriod {
  dates: string;
  week: string | null;
  midweek: string | null;
  night: string | null;
  weekend: string | null;
  minStay: string | null;
  end?: boolean;
}

const primevue = usePrimeVue();
const { locale } = useI18n();

const config = ref<CalendarConfig | null>(null);

const availability = computed<Record<string, AvailabilityStatus>>(
  () => config.value?.availability ?? {},
);

const formatCalendarDate = (date: CalendarDate): string => {
  const month = String(date.month + 1).padStart(2, '0');
  const day = String(date.day).padStart(2, '0');

  return `${date.year}-${month}-${day}`;
};

const availabilityClasses: Record<AvailabilityStatus, string> = {
  booked: 'bg-red-500 text-white font-bold',
  option: 'bg-yellow-400 text-white font-bold',
  available: 'bg-green-400 text-white font-bold',
};

const getDateClass = (date: CalendarDate): string => {
  const status = availability.value[formatCalendarDate(date)];

  return status ? availabilityClasses[status] : '';
};

const primeVueLocales: Record<
  SupportedLocale,
  Partial<typeof primevue.config.locale>
> = {
  nl: {
    firstDayOfWeek: 1,
    dayNames: [
      'Zondag',
      'Maandag',
      'Dinsdag',
      'Woensdag',
      'Donderdag',
      'Vrijdag',
      'Zaterdag',
    ],
    dayNamesShort: ['Zon', 'Ma', 'Din', 'Woe', 'Don', 'Vrij', 'Zat'],
    dayNamesMin: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
    monthNames: [
      'Januari',
      'Februari',
      'Maart',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Augustus',
      'September',
      'Oktober',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mrt',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
    ],
  },
  'en-gb': {
    firstDayOfWeek: 1,
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  fr: {
    firstDayOfWeek: 1,
    dayNames: [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ],
    dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
    monthNames: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ],
    monthNamesShort: [
      'Jan',
      'Fév',
      'Mar',
      'Avr',
      'Mai',
      'Jun',
      'Jul',
      'Aoû',
      'Sep',
      'Oct',
      'Nov',
      'Déc',
    ],
  },
};

const pricingPeriodsNl: PricingPeriod[] = [
  {
    dates: '04 apr 2026 - 27 jun 2026',
    week: '€2.100,00',
    midweek: '€1.200,00',
    night: '€300,00',
    weekend: '€900,00',
    minStay: '3',
  },
  {
    dates: '27 jun 2026 - 04 jul 2026',
    week: '€2.275,00',
    midweek: '€1.300,00',
    night: '€325,00',
    weekend: '€975,00',
    minStay: '3',
  },
  {
    dates: '04 jul 2026 - 22 aug 2026',
    week: '€2.500,00',
    midweek: null,
    night: '€357,00',
    weekend: null,
    minStay: '7',
  },
  {
    dates: '22 aug 2026 - 29 aug 2026',
    week: '€2.275,00',
    midweek: '€1.300,00',
    night: '€325,00',
    weekend: '€975,00',
    minStay: '3',
  },
  {
    dates: '29 aug 2026',
    week: '€1.900,00',
    midweek: '€1.100,00',
    night: '€275,00',
    weekend: '€825,00',
    minStay: '3',
    end: true,
  },
];

const pricingPeriodsGb: PricingPeriod[] = [
  {
    dates: '04 Apr 2026 - 27 Jun 2026',
    week: '€2.100,00',
    midweek: '€1.200,00',
    night: '€300,00',
    weekend: '€900,00',
    minStay: '3',
  },
  {
    dates: '27 Jun 2026 - 04 Jul 2026',
    week: '€2.275,00',
    midweek: '€1.300,00',
    night: '€325,00',
    weekend: '€975,00',
    minStay: '3',
  },
  {
    dates: '04 Jul 2026 - 22 Aug 2026',
    week: '€2.500,00',
    midweek: null,
    night: '€357,00',
    weekend: null,
    minStay: '7',
  },
  {
    dates: '22 Aug 2026 - 29 Aug 2026',
    week: '€2.275,00',
    midweek: '€1.300,00',
    night: '€325,00',
    weekend: '€975,00',
    minStay: '3',
  },
  {
    dates: '29 Aug 2026',
    week: '€1.900,00',
    midweek: '€1.100,00',
    night: '€275,00',
    weekend: '€825,00',
    minStay: '3',
    end: true,
  },
];

const pricingPeriodsFr: PricingPeriod[] = [
  {
    dates: '04 avr 2026 - 27 juin 2026',
    week: '€2.100,00',
    midweek: '€1.200,00',
    night: '€300,00',
    weekend: '€900,00',
    minStay: '3',
  },
  {
    dates: '27 juin 2026 - 04 juill 2026',
    week: '€2.275,00',
    midweek: '€1.300,00',
    night: '€325,00',
    weekend: '€975,00',
    minStay: '3',
  },
  {
    dates: '04 juill 2026 - 22 août 2026',
    week: '€2.500,00',
    midweek: null,
    night: '€357,00',
    weekend: null,
    minStay: '7',
  },
  {
    dates: '22 août 2026 - 29 août 2026',
    week: '€2.275,00',
    midweek: '€1.300,00',
    night: '€325,00',
    weekend: '€975,00',
    minStay: '3',
  },
  {
    dates: '29 août 2026',
    week: '€1.900,00',
    midweek: '€1.100,00',
    night: '€275,00',
    weekend: '€825,00',
    minStay: '3',
    end: true,
  },
];

const arraysByLocale: Record<SupportedLocale, PricingPeriod[]> = {
  nl: pricingPeriodsNl,
  fr: pricingPeriodsFr,
  'en-gb': pricingPeriodsGb,
};

const pricingPeriods = computed<PricingPeriod[]>(() => {
  const currentLocale = locale.value as SupportedLocale;

  return arraysByLocale[currentLocale] ?? pricingPeriodsNl;
});

const getMinDate = (index: number) => {
  const m = config.value?.months?.[index];

  return m ? new Date(m.minDate) : new Date(2026, index + 3, 1);
};

watch(
  locale,
  (newLocale) => {
    const targetLocale = primeVueLocales[newLocale] || primeVueLocales.nl;
    primevue.config.locale = { ...primevue.config.locale, ...targetLocale };
  },
  { immediate: true },
);

onMounted(async () => {
  const { data, error } = await useFetch<CalendarConfig>('/calendar.json');

  if (data.value) {
    config.value = data.value;
  }

  if (error.value) {
    console.error(error.value);
  }
});
</script>

<template>
  <div class="px-6 md:pt-28 max-w-7xl mx-auto py-16 space-y-10">
    <h2
      class="text-2xl md:text-5xl font-bold mb-4 border-l-4 border-[#93a9c6] pl-4"
    >
      {{ $t('navigation.book-now') }}
    </h2>

    <div
      class="grid grid-cols-1 bg-villa-beige-300 shadow-xl rounded-3xl overflow-hidden mb-8"
    >
      <div class="p-8 md:p-12 flex flex-col justify-start">
        <h2
          class="text-3xl font-serif font-bold mb-6 text-slate-900 border-l-4 border-villa-beige-400 pl-4"
        >
          {{ $t('page.book-now.info-card.booking.header') }}
        </h2>

        <p>
          {{ $t('page.book-now.info-card.booking.content') }}

          <a
            href="https://sudarrange.com/property/fumel-47500-gite-le-petit-wren-maison-de-vacances-holiday-house/#request_form"
            class="text-[#93a9c6] font-medium underline cursor-pointer"
            target="_blank"
          >
            {{ $t('page.book-now.info-card.booking.link') }}
          </a>
        </p>
      </div>
    </div>

    <div
      class="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100"
    >
      <div class="mb-8">
        <h3
          class="text-3xl font-serif font-bold border-l-4 border-[#93a9c6] pl-4"
        >
          {{ $t('page.book-now.header.tarif-available') }}
        </h3>

        <p class="text-slate-500 mt-2">
          {{ $t('page.book-now.sub-header.tarif-available') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-12">
        <div class="lg:col-span-2 space-y-6">
          <div
            v-for="(period, index) in pricingPeriods"
            :key="index"
            class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div
              class="bg-slate-50 px-6 py-3 border-b border-slate-100 flex flex-col md:flex-row md:justify-between items-center"
            >
              <span
                class="text-xs uppercase tracking-widest font-bold text-slate-400"
                >{{ $t('page.book-now.periods.columns.period') }}</span
              >

              <span
                v-if="period.end"
                class="text-sm font-semibold text-[#93a9c6]"
                >{{ period.dates }}
                {{ $t('page.book-now.periods.end-season') }}</span
              >
              <span v-else class="text-sm font-semibold text-[#93a9c6]">{{
                period.dates
              }}</span>
            </div>

            <div class="p-6 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div>
                <p class="text-[10px] uppercase text-slate-400 font-bold mb-1">
                  {{ $t('page.book-now.periods.columns.per-week') }}
                </p>

                <p
                  v-if="period.week === null"
                  class="text-lg font-bold text-slate-900"
                >
                  {{ $t('page.book-now.periods.n-a') }}
                </p>
                <p v-else class="text-lg font-bold text-slate-900">
                  {{ period.week }}
                </p>
              </div>

              <div>
                <p class="text-[10px] uppercase text-slate-400 font-bold mb-1">
                  {{ $t('page.book-now.periods.columns.mid-week') }}
                </p>

                <p
                  v-if="period.midweek === null"
                  class="text-lg font-bold text-slate-900"
                >
                  {{ $t('page.book-now.periods.n-a') }}
                </p>
                <p v-else class="text-lg font-bold text-slate-900">
                  {{ period.midweek }}
                </p>
              </div>

              <div>
                <p class="text-[10px] uppercase text-slate-400 font-bold mb-1">
                  {{ $t('page.book-now.periods.columns.night') }}
                </p>

                <p
                  v-if="period.night === null"
                  class="text-lg font-bold text-slate-900"
                >
                  {{ $t('page.book-now.periods.n-a') }}
                </p>
                <p v-else class="text-lg font-bold text-slate-900">
                  {{ period.night }}
                </p>
              </div>

              <div>
                <p class="text-[10px] uppercase text-slate-400 font-bold mb-1">
                  {{ $t('page.book-now.periods.columns.weekend') }}
                </p>

                <p
                  v-if="period.weekend === null"
                  class="text-lg font-bold text-slate-900"
                >
                  {{ $t('page.book-now.periods.n-a') }}
                </p>
                <p v-else class="text-lg font-bold text-slate-900">
                  {{ period.weekend }}
                </p>
              </div>

              <div class="bg-blue-50/50 rounded-lg py-2">
                <p class="text-[10px] uppercase text-blue-400 font-bold mb-1">
                  {{ $t('page.book-now.periods.columns.min-stay') }}
                </p>

                <p
                  v-if="period.minStay === null"
                  class="text-sm font-bold text-blue-700"
                >
                  {{ $t('page.book-now.periods.n-a') }}
                </p>
                <p v-else class="text-sm font-bold text-blue-700">
                  {{ period.minStay }} {{ $t('page.book-now.periods.nights') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-villa-beige-300 rounded-3xl p-8 border border-villa-beige-300/50 self-start"
        >
          <h4
            class="font-serif font-bold text-xl mb-6 text-slate-900 border-l-4 border-villa-beige-400 pl-4"
          >
            {{ $t('page.book-now.periods.extra-cost.header') }}
          </h4>

          <ul class="space-y-4">
            <li
              class="flex justify-between items-center pb-4 border-b border-slate-200/50"
            >
              <span class="text-slate-600 text-sm">{{
                $t('page.book-now.periods.extra-cost.cost.deposit')
              }}</span>
              <span class="font-bold text-slate-900">€ 500,00</span>
            </li>
            <li
              class="flex justify-between items-center pb-4 border-b border-slate-200/50"
            >
              <span class="text-slate-600 text-sm">{{
                $t('page.book-now.periods.extra-cost.cost.end-cleaning')
              }}</span>
              <span class="font-bold text-slate-900">€ 100,00</span>
            </li>
            <li
              class="flex justify-between items-center pb-4 border-b border-slate-200/50"
            >
              <span class="text-slate-600 text-sm">{{
                $t('page.book-now.periods.extra-cost.cost.linnen')
              }}</span>
              <span class="font-bold text-slate-900">€ 100,00</span>
            </li>
            <li class="flex justify-between items-start">
              <span class="text-slate-600 text-sm">{{
                $t('page.book-now.periods.extra-cost.cost.tourist-tax')
              }}</span>

              <div class="text-right">
                <span class="font-bold text-slate-900 block">€ 2,60</span>
                <span class="text-[10px] text-slate-400 uppercase">{{
                  $t('page.book-now.periods.extra-cost.cost.per-night')
                }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100"
    >
      <h3
        class="text-3xl font-serif font-bold mb-8 border-l-4 border-[#93a9c6] pl-4"
      >
        {{ $t('page.book-now.header.available') }}
      </h3>

      <div class="flex gap-6 mb-8 justify-center text-sm font-medium">
        <div class="flex items-center gap-2">
          <span class="w-4 h-4 rounded-full bg-green-500" />
          {{ $t('page.book-now.status.available') }}
        </div>

        <div class="flex items-center gap-2">
          <span class="w-4 h-4 rounded-full bg-yellow-400" />
          {{ $t('page.book-now.status.option') }}
        </div>

        <div class="flex items-center gap-2">
          <span class="w-4 h-4 rounded-full bg-red-500" />
          {{ $t('page.book-now.status.booked') }}
        </div>
      </div>

      <div v-if="config" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DatePicker
          :first-day-of-week="1"
          inline
          :min-date="getMinDate(0)"
          :show-other-months="false"
          readonly
          tabindex="-1"
        >
          <template #date="slotProps">
            <div
              :class="getDateClass(slotProps.date)"
              class="w-full h-full flex items-center justify-center rounded-lg transition-colors"
            >
              {{ slotProps.date.day }}
            </div>
          </template>
        </DatePicker>

        <DatePicker
          :first-day-of-week="1"
          inline
          :min-date="getMinDate(1)"
          :show-other-months="false"
          readonly
          tabindex="-1"
        >
          <template #date="slotProps">
            <div
              :class="getDateClass(slotProps.date)"
              class="w-full h-full flex items-center justify-center rounded-lg transition-colors"
            >
              {{ slotProps.date.day }}
            </div>
          </template>
        </DatePicker>

        <DatePicker
          :first-day-of-week="1"
          inline
          :min-date="getMinDate(2)"
          :show-other-months="false"
          readonly
          tabindex="-1"
        >
          <template #date="slotProps">
            <div
              :class="getDateClass(slotProps.date)"
              class="w-full h-full flex items-center justify-center rounded-lg transition-colors"
            >
              {{ slotProps.date.day }}
            </div>
          </template>
        </DatePicker>

        <DatePicker
          :first-day-of-week="1"
          inline
          :min-date="getMinDate(3)"
          :show-other-months="false"
          readonly
          tabindex="-1"
        >
          <template #date="slotProps">
            <div
              :class="getDateClass(slotProps.date)"
              class="w-full h-full flex items-center justify-center rounded-lg transition-colors"
            >
              {{ slotProps.date.day }}
            </div>
          </template>
        </DatePicker>
      </div>
    </div>
  </div>
</template>

<style>
.p-datepicker-prev-button,
.p-datepicker-next-button {
  display: none !important;
}

.p-datepicker-select-month,
.p-datepicker-select-year,
.p-datepicker-day {
  pointer-events: none;
}

.p-datepicker-title {
  width: 100%;
}
</style>