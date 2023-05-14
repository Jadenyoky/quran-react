import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const Sixteen = () => {
  return (
    <div>
      <Helmet>
        <title>016 - سورة النحل</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة النحل</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          أَتَىٰٓ أَمۡرُ ٱللَّهِ فَلَا تَسۡتَعۡجِلُوهُۚ سُبۡحَٰنَهُۥ وَتَعَٰلَىٰ
          عَمَّا يُشۡرِكُونَ (1) يُنَزِّلُ ٱلۡمَلَٰٓئِكَةَ بِٱلرُّوحِ مِنۡ
          أَمۡرِهِۦ عَلَىٰ مَن يَشَآءُ مِنۡ عِبَادِهِۦٓ أَنۡ أَنذِرُوٓاْ
          أَنَّهُۥ لَآ إِلَٰهَ إِلَّآ أَنَا۠ فَٱتَّقُونِ (2) خَلَقَ
          ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ بِٱلۡحَقِّۚ تَعَٰلَىٰ عَمَّا يُشۡرِكُونَ (3)
          خَلَقَ ٱلۡإِنسَٰنَ مِن نُّطۡفَةٖ فَإِذَا هُوَ خَصِيمٞ مُّبِينٞ (4)
          وَٱلۡأَنۡعَٰمَ خَلَقَهَاۖ لَكُمۡ فِيهَا دِفۡءٞ وَمَنَٰفِعُ وَمِنۡهَا
          تَأۡكُلُونَ (5) وَلَكُمۡ فِيهَا جَمَالٌ حِينَ تُرِيحُونَ وَحِينَ
          تَسۡرَحُونَ (6) وَتَحۡمِلُ أَثۡقَالَكُمۡ إِلَىٰ بَلَدٖ لَّمۡ
          تَكُونُواْ بَٰلِغِيهِ إِلَّا بِشِقِّ ٱلۡأَنفُسِۚ إِنَّ رَبَّكُمۡ
          لَرَءُوفٞ رَّحِيمٞ (7) وَٱلۡخَيۡلَ وَٱلۡبِغَالَ وَٱلۡحَمِيرَ
          لِتَرۡكَبُوهَا وَزِينَةٗۚ وَيَخۡلُقُ مَا لَا تَعۡلَمُونَ (8) وَعَلَى
          ٱللَّهِ قَصۡدُ ٱلسَّبِيلِ وَمِنۡهَا جَآئِرٞۚ وَلَوۡ شَآءَ
          لَهَدَىٰكُمۡ أَجۡمَعِينَ (9) هُوَ ٱلَّذِيٓ أَنزَلَ مِنَ ٱلسَّمَآءِ
          مَآءٗۖ لَّكُم مِّنۡهُ شَرَابٞ وَمِنۡهُ شَجَرٞ فِيهِ تُسِيمُونَ (10)
          يُنۢبِتُ لَكُم بِهِ ٱلزَّرۡعَ وَٱلزَّيۡتُونَ وَٱلنَّخِيلَ
          وَٱلۡأَعۡنَٰبَ وَمِن كُلِّ ٱلثَّمَرَٰتِۚ إِنَّ فِي ذَٰلِكَ لَأٓيَةٗ
          لِّقَوۡمٖ يَتَفَكَّرُونَ (11) وَسَخَّرَ لَكُمُ ٱلَّيۡلَ وَٱلنَّهَارَ
          وَٱلشَّمۡسَ وَٱلۡقَمَرَۖ وَٱلنُّجُومُ مُسَخَّرَٰتُۢ بِأَمۡرِهِۦٓۚ
          إِنَّ فِي ذَٰلِكَ لَأٓيَٰتٖ لِّقَوۡمٖ يَعۡقِلُونَ (12) وَمَا ذَرَأَ
          لَكُمۡ فِي ٱلۡأَرۡضِ مُخۡتَلِفًا أَلۡوَٰنُهُۥٓۚ إِنَّ فِي ذَٰلِكَ
          لَأٓيَةٗ لِّقَوۡمٖ يَذَّكَّرُونَ (13) وَهُوَ ٱلَّذِي سَخَّرَ ٱلۡبَحۡرَ
          لِتَأۡكُلُواْ مِنۡهُ لَحۡمٗا طَرِيّٗا وَتَسۡتَخۡرِجُواْ مِنۡهُ
          حِلۡيَةٗ تَلۡبَسُونَهَاۖ وَتَرَى ٱلۡفُلۡكَ مَوَاخِرَ فِيهِ
          وَلِتَبۡتَغُواْ مِن فَضۡلِهِۦ وَلَعَلَّكُمۡ تَشۡكُرُونَ (14)
          وَأَلۡقَىٰ فِي ٱلۡأَرۡضِ رَوَٰسِيَ أَن تَمِيدَ بِكُمۡ وَأَنۡهَٰرٗا
          وَسُبُلٗا لَّعَلَّكُمۡ تَهۡتَدُونَ (15) وَعَلَٰمَٰتٖۚ وَبِٱلنَّجۡمِ
          هُمۡ يَهۡتَدُونَ (16) أَفَمَن يَخۡلُقُ كَمَن لَّا يَخۡلُقُۚ أَفَلَا
          تَذَكَّرُونَ (17) وَإِن تَعُدُّواْ نِعۡمَةَ ٱللَّهِ لَا تُحۡصُوهَآۗ
          إِنَّ ٱللَّهَ لَغَفُورٞ رَّحِيمٞ (18) وَٱللَّهُ يَعۡلَمُ مَا
          تُسِرُّونَ وَمَا تُعۡلِنُونَ (19) وَٱلَّذِينَ يَدۡعُونَ مِن دُونِ
          ٱللَّهِ لَا يَخۡلُقُونَ شَيۡـٔٗا وَهُمۡ يُخۡلَقُونَ (20) أَمۡوَٰتٌ
          غَيۡرُ أَحۡيَآءٖۖ وَمَا يَشۡعُرُونَ أَيَّانَ يُبۡعَثُونَ (21)
          إِلَٰهُكُمۡ إِلَٰهٞ وَٰحِدٞۚ فَٱلَّذِينَ لَا يُؤۡمِنُونَ بِٱلۡأٓخِرَةِ
          قُلُوبُهُم مُّنكِرَةٞ وَهُم مُّسۡتَكۡبِرُونَ (22) لَا جَرَمَ أَنَّ
          ٱللَّهَ يَعۡلَمُ مَا يُسِرُّونَ وَمَا يُعۡلِنُونَۚ إِنَّهُۥ لَا
          يُحِبُّ ٱلۡمُسۡتَكۡبِرِينَ (23) وَإِذَا قِيلَ لَهُم مَّاذَآ أَنزَلَ
          رَبُّكُمۡ قَالُوٓاْ أَسَٰطِيرُ ٱلۡأَوَّلِينَ (24) لِيَحۡمِلُوٓاْ
          أَوۡزَارَهُمۡ كَامِلَةٗ يَوۡمَ ٱلۡقِيَٰمَةِ وَمِنۡ أَوۡزَارِ ٱلَّذِينَ
          يُضِلُّونَهُم بِغَيۡرِ عِلۡمٍۗ أَلَا سَآءَ مَا يَزِرُونَ (25) قَدۡ
          مَكَرَ ٱلَّذِينَ مِن قَبۡلِهِمۡ فَأَتَى ٱللَّهُ بُنۡيَٰنَهُم مِّنَ
          ٱلۡقَوَاعِدِ فَخَرَّ عَلَيۡهِمُ ٱلسَّقۡفُ مِن فَوۡقِهِمۡ وَأَتَىٰهُمُ
          ٱلۡعَذَابُ مِنۡ حَيۡثُ لَا يَشۡعُرُونَ (26) ثُمَّ يَوۡمَ ٱلۡقِيَٰمَةِ
          يُخۡزِيهِمۡ وَيَقُولُ أَيۡنَ شُرَكَآءِيَ ٱلَّذِينَ كُنتُمۡ
          تُشَٰٓقُّونَ فِيهِمۡۚ قَالَ ٱلَّذِينَ أُوتُواْ ٱلۡعِلۡمَ إِنَّ
          ٱلۡخِزۡيَ ٱلۡيَوۡمَ وَٱلسُّوٓءَ عَلَى ٱلۡكَٰفِرِينَ (27) ٱلَّذِينَ
          تَتَوَفَّىٰهُمُ ٱلۡمَلَٰٓئِكَةُ ظَالِمِيٓ أَنفُسِهِمۡۖ فَأَلۡقَوُاْ
          ٱلسَّلَمَ مَا كُنَّا نَعۡمَلُ مِن سُوٓءِۭۚ بَلَىٰٓۚ إِنَّ ٱللَّهَ
          عَلِيمُۢ بِمَا كُنتُمۡ تَعۡمَلُونَ (28) فَٱدۡخُلُوٓاْ أَبۡوَٰبَ
          جَهَنَّمَ خَٰلِدِينَ فِيهَاۖ فَلَبِئۡسَ مَثۡوَى ٱلۡمُتَكَبِّرِينَ (29)
          ۞وَقِيلَ لِلَّذِينَ ٱتَّقَوۡاْ مَاذَآ أَنزَلَ رَبُّكُمۡۚ قَالُواْ
          خَيۡرٗاۗ لِّلَّذِينَ أَحۡسَنُواْ فِي هَٰذِهِ ٱلدُّنۡيَا حَسَنَةٞۚ
          وَلَدَارُ ٱلۡأٓخِرَةِ خَيۡرٞۚ وَلَنِعۡمَ دَارُ ٱلۡمُتَّقِينَ (30)
          جَنَّٰتُ عَدۡنٖ يَدۡخُلُونَهَا تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُۖ
          لَهُمۡ فِيهَا مَا يَشَآءُونَۚ كَذَٰلِكَ يَجۡزِي ٱللَّهُ ٱلۡمُتَّقِينَ
          (31) ٱلَّذِينَ تَتَوَفَّىٰهُمُ ٱلۡمَلَٰٓئِكَةُ طَيِّبِينَ يَقُولُونَ
          سَلَٰمٌ عَلَيۡكُمُ ٱدۡخُلُواْ ٱلۡجَنَّةَ بِمَا كُنتُمۡ تَعۡمَلُونَ
          (32) هَلۡ يَنظُرُونَ إِلَّآ أَن تَأۡتِيَهُمُ ٱلۡمَلَٰٓئِكَةُ أَوۡ
          يَأۡتِيَ أَمۡرُ رَبِّكَۚ كَذَٰلِكَ فَعَلَ ٱلَّذِينَ مِن قَبۡلِهِمۡۚ
          وَمَا ظَلَمَهُمُ ٱللَّهُ وَلَٰكِن كَانُوٓاْ أَنفُسَهُمۡ يَظۡلِمُونَ
          (33) فَأَصَابَهُمۡ سَيِّـَٔاتُ مَا عَمِلُواْ وَحَاقَ بِهِم مَّا
          كَانُواْ بِهِۦ يَسۡتَهۡزِءُونَ (34) وَقَالَ ٱلَّذِينَ أَشۡرَكُواْ لَوۡ
          شَآءَ ٱللَّهُ مَا عَبَدۡنَا مِن دُونِهِۦ مِن شَيۡءٖ نَّحۡنُ وَلَآ
          ءَابَآؤُنَا وَلَا حَرَّمۡنَا مِن دُونِهِۦ مِن شَيۡءٖۚ كَذَٰلِكَ
          فَعَلَ ٱلَّذِينَ مِن قَبۡلِهِمۡۚ فَهَلۡ عَلَى ٱلرُّسُلِ إِلَّا
          ٱلۡبَلَٰغُ ٱلۡمُبِينُ (35) وَلَقَدۡ بَعَثۡنَا فِي كُلِّ أُمَّةٖ
          رَّسُولًا أَنِ ٱعۡبُدُواْ ٱللَّهَ وَٱجۡتَنِبُواْ ٱلطَّٰغُوتَۖ
          فَمِنۡهُم مَّنۡ هَدَى ٱللَّهُ وَمِنۡهُم مَّنۡ حَقَّتۡ عَلَيۡهِ
          ٱلضَّلَٰلَةُۚ فَسِيرُواْ فِي ٱلۡأَرۡضِ فَٱنظُرُواْ كَيۡفَ كَانَ
          عَٰقِبَةُ ٱلۡمُكَذِّبِينَ (36) إِن تَحۡرِصۡ عَلَىٰ هُدَىٰهُمۡ فَإِنَّ
          ٱللَّهَ لَا يَهۡدِي مَن يُضِلُّۖ وَمَا لَهُم مِّن نَّٰصِرِينَ (37)
          وَأَقۡسَمُواْ بِٱللَّهِ جَهۡدَ أَيۡمَٰنِهِمۡ لَا يَبۡعَثُ ٱللَّهُ مَن
          يَمُوتُۚ بَلَىٰ وَعۡدًا عَلَيۡهِ حَقّٗا وَلَٰكِنَّ أَكۡثَرَ ٱلنَّاسِ
          لَا يَعۡلَمُونَ (38) لِيُبَيِّنَ لَهُمُ ٱلَّذِي يَخۡتَلِفُونَ فِيهِ
          وَلِيَعۡلَمَ ٱلَّذِينَ كَفَرُوٓاْ أَنَّهُمۡ كَانُواْ كَٰذِبِينَ (39)
          إِنَّمَا قَوۡلُنَا لِشَيۡءٍ إِذَآ أَرَدۡنَٰهُ أَن نَّقُولَ لَهُۥ كُن
          فَيَكُونُ (40) وَٱلَّذِينَ هَاجَرُواْ فِي ٱللَّهِ مِنۢ بَعۡدِ مَا
          ظُلِمُواْ لَنُبَوِّئَنَّهُمۡ فِي ٱلدُّنۡيَا حَسَنَةٗۖ وَلَأَجۡرُ
          ٱلۡأٓخِرَةِ أَكۡبَرُۚ لَوۡ كَانُواْ يَعۡلَمُونَ (41) ٱلَّذِينَ
          صَبَرُواْ وَعَلَىٰ رَبِّهِمۡ يَتَوَكَّلُونَ (42) وَمَآ أَرۡسَلۡنَا
          مِن قَبۡلِكَ إِلَّا رِجَالٗا نُّوحِيٓ إِلَيۡهِمۡۖ فَسۡـَٔلُوٓاْ أَهۡلَ
          ٱلذِّكۡرِ إِن كُنتُمۡ لَا تَعۡلَمُونَ (43) بِٱلۡبَيِّنَٰتِ
          وَٱلزُّبُرِۗ وَأَنزَلۡنَآ إِلَيۡكَ ٱلذِّكۡرَ لِتُبَيِّنَ لِلنَّاسِ
          مَا نُزِّلَ إِلَيۡهِمۡ وَلَعَلَّهُمۡ يَتَفَكَّرُونَ (44) أَفَأَمِنَ
          ٱلَّذِينَ مَكَرُواْ ٱلسَّيِّـَٔاتِ أَن يَخۡسِفَ ٱللَّهُ بِهِمُ
          ٱلۡأَرۡضَ أَوۡ يَأۡتِيَهُمُ ٱلۡعَذَابُ مِنۡ حَيۡثُ لَا يَشۡعُرُونَ
          (45) أَوۡ يَأۡخُذَهُمۡ فِي تَقَلُّبِهِمۡ فَمَا هُم بِمُعۡجِزِينَ (46)
          أَوۡ يَأۡخُذَهُمۡ عَلَىٰ تَخَوُّفٖ فَإِنَّ رَبَّكُمۡ لَرَءُوفٞ
          رَّحِيمٌ (47) أَوَ لَمۡ يَرَوۡاْ إِلَىٰ مَا خَلَقَ ٱللَّهُ مِن شَيۡءٖ
          يَتَفَيَّؤُاْ ظِلَٰلُهُۥ عَنِ ٱلۡيَمِينِ وَٱلشَّمَآئِلِ سُجَّدٗا
          لِّلَّهِ وَهُمۡ دَٰخِرُونَ (48) وَلِلَّهِۤ يَسۡجُدُۤ مَا فِي
          ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِ مِن دَآبَّةٖ وَٱلۡمَلَٰٓئِكَةُ
          وَهُمۡ لَا يَسۡتَكۡبِرُونَ (49) يَخَافُونَ رَبَّهُم مِّن فَوۡقِهِمۡ
          وَيَفۡعَلُونَ مَا يُؤۡمَرُونَ۩ (50) ۞وَقَالَ ٱللَّهُ لَا تَتَّخِذُوٓاْ
          إِلَٰهَيۡنِ ٱثۡنَيۡنِۖ إِنَّمَا هُوَ إِلَٰهٞ وَٰحِدٞ فَإِيَّٰيَ
          فَٱرۡهَبُونِ (51) وَلَهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَلَهُ
          ٱلدِّينُ وَاصِبًاۚ أَفَغَيۡرَ ٱللَّهِ تَتَّقُونَ (52) وَمَا بِكُم مِّن
          نِّعۡمَةٖ فَمِنَ ٱللَّهِۖ ثُمَّ إِذَا مَسَّكُمُ ٱلضُّرُّ فَإِلَيۡهِ
          تَجۡـَٔرُونَ (53) ثُمَّ إِذَا كَشَفَ ٱلضُّرَّ عَنكُمۡ إِذَا فَرِيقٞ
          مِّنكُم بِرَبِّهِمۡ يُشۡرِكُونَ (54) لِيَكۡفُرُواْ بِمَآ
          ءَاتَيۡنَٰهُمۡۚ فَتَمَتَّعُواْ فَسَوۡفَ تَعۡلَمُونَ (55) وَيَجۡعَلُونَ
          لِمَا لَا يَعۡلَمُونَ نَصِيبٗا مِّمَّا رَزَقۡنَٰهُمۡۗ تَٱللَّهِ
          لَتُسۡـَٔلُنَّ عَمَّا كُنتُمۡ تَفۡتَرُونَ (56) وَيَجۡعَلُونَ لِلَّهِ
          ٱلۡبَنَٰتِ سُبۡحَٰنَهُۥ وَلَهُم مَّا يَشۡتَهُونَ (57) وَإِذَا بُشِّرَ
          أَحَدُهُم بِٱلۡأُنثَىٰ ظَلَّ وَجۡهُهُۥ مُسۡوَدّٗا وَهُوَ كَظِيمٞ (58)
          يَتَوَٰرَىٰ مِنَ ٱلۡقَوۡمِ مِن سُوٓءِ مَا بُشِّرَ بِهِۦٓۚ
          أَيُمۡسِكُهُۥ عَلَىٰ هُونٍ أَمۡ يَدُسُّهُۥ فِي ٱلتُّرَابِۗ أَلَا
          سَآءَ مَا يَحۡكُمُونَ (59) لِلَّذِينَ لَا يُؤۡمِنُونَ بِٱلۡأٓخِرَةِ
          مَثَلُ ٱلسَّوۡءِۖ وَلِلَّهِ ٱلۡمَثَلُ ٱلۡأَعۡلَىٰۚ وَهُوَ ٱلۡعَزِيزُ
          ٱلۡحَكِيمُ (60) وَلَوۡ يُؤَاخِذُ ٱللَّهُ ٱلنَّاسَ بِظُلۡمِهِم مَّا
          تَرَكَ عَلَيۡهَا مِن دَآبَّةٖ وَلَٰكِن يُؤَخِّرُهُمۡ إِلَىٰٓ أَجَلٖ
          مُّسَمّٗىۖ فَإِذَا جَآءَ أَجَلُهُمۡ لَا يَسۡتَـٔۡخِرُونَ سَاعَةٗ
          وَلَا يَسۡتَقۡدِمُونَ (61) وَيَجۡعَلُونَ لِلَّهِ مَا يَكۡرَهُونَۚ
          وَتَصِفُ أَلۡسِنَتُهُمُ ٱلۡكَذِبَ أَنَّ لَهُمُ ٱلۡحُسۡنَىٰۚ لَا جَرَمَ
          أَنَّ لَهُمُ ٱلنَّارَ وَأَنَّهُم مُّفۡرَطُونَ (62) تَٱللَّهِ لَقَدۡ
          أَرۡسَلۡنَآ إِلَىٰٓ أُمَمٖ مِّن قَبۡلِكَ فَزَيَّنَ لَهُمُ
          ٱلشَّيۡطَٰنُ أَعۡمَٰلَهُمۡ فَهُوَ وَلِيُّهُمُ ٱلۡيَوۡمَ وَلَهُمۡ
          عَذَابٌ أَلِيمٞ (63) وَمَآ أَنزَلۡنَا عَلَيۡكَ ٱلۡكِتَٰبَ إِلَّا
          لِتُبَيِّنَ لَهُمُ ٱلَّذِي ٱخۡتَلَفُواْ فِيهِ وَهُدٗى وَرَحۡمَةٗ
          لِّقَوۡمٖ يُؤۡمِنُونَ (64) وَٱللَّهُ أَنزَلَ مِنَ ٱلسَّمَآءِ مَآءٗ
          فَأَحۡيَا بِهِ ٱلۡأَرۡضَ بَعۡدَ مَوۡتِهَآۚ إِنَّ فِي ذَٰلِكَ لَأٓيَةٗ
          لِّقَوۡمٖ يَسۡمَعُونَ (65) وَإِنَّ لَكُمۡ فِي ٱلۡأَنۡعَٰمِ لَعِبۡرَةٗۖ
          نُّسۡقِيكُم مِّمَّا فِي بُطُونِهِۦ مِنۢ بَيۡنِ فَرۡثٖ وَدَمٖ لَّبَنًا
          خَالِصٗا سَآئِغٗا لِّلشَّٰرِبِينَ (66) وَمِن ثَمَرَٰتِ ٱلنَّخِيلِ
          وَٱلۡأَعۡنَٰبِ تَتَّخِذُونَ مِنۡهُ سَكَرٗا وَرِزۡقًا حَسَنًاۚ إِنَّ
          فِي ذَٰلِكَ لَأٓيَةٗ لِّقَوۡمٖ يَعۡقِلُونَ (67) وَأَوۡحَىٰ رَبُّكَ
          إِلَى ٱلنَّحۡلِ أَنِ ٱتَّخِذِي مِنَ ٱلۡجِبَالِ بُيُوتٗا وَمِنَ
          ٱلشَّجَرِ وَمِمَّا يَعۡرِشُونَ (68) ثُمَّ كُلِي مِن كُلِّ ٱلثَّمَرَٰتِ
          فَٱسۡلُكِي سُبُلَ رَبِّكِ ذُلُلٗاۚ يَخۡرُجُ مِنۢ بُطُونِهَا شَرَابٞ
          مُّخۡتَلِفٌ أَلۡوَٰنُهُۥ فِيهِ شِفَآءٞ لِّلنَّاسِۚ إِنَّ فِي ذَٰلِكَ
          لَأٓيَةٗ لِّقَوۡمٖ يَتَفَكَّرُونَ (69) وَٱللَّهُ خَلَقَكُمۡ ثُمَّ
          يَتَوَفَّىٰكُمۡۚ وَمِنكُم مَّن يُرَدُّ إِلَىٰٓ أَرۡذَلِ ٱلۡعُمُرِ
          لِكَيۡ لَا يَعۡلَمَ بَعۡدَ عِلۡمٖ شَيۡـًٔاۚ إِنَّ ٱللَّهَ عَلِيمٞ
          قَدِيرٞ (70) وَٱللَّهُ فَضَّلَ بَعۡضَكُمۡ عَلَىٰ بَعۡضٖ فِي ٱلرِّزۡقِۚ
          فَمَا ٱلَّذِينَ فُضِّلُواْ بِرَآدِّي رِزۡقِهِمۡ عَلَىٰ مَا مَلَكَتۡ
          أَيۡمَٰنُهُمۡ فَهُمۡ فِيهِ سَوَآءٌۚ أَفَبِنِعۡمَةِ ٱللَّهِ
          يَجۡحَدُونَ (71) وَٱللَّهُ جَعَلَ لَكُم مِّنۡ أَنفُسِكُمۡ أَزۡوَٰجٗا
          وَجَعَلَ لَكُم مِّنۡ أَزۡوَٰجِكُم بَنِينَ وَحَفَدَةٗ وَرَزَقَكُم مِّنَ
          ٱلطَّيِّبَٰتِۚ أَفَبِٱلۡبَٰطِلِ يُؤۡمِنُونَ وَبِنِعۡمَتِ ٱللَّهِ هُمۡ
          يَكۡفُرُونَ (72) وَيَعۡبُدُونَ مِن دُونِ ٱللَّهِ مَا لَا يَمۡلِكُ
          لَهُمۡ رِزۡقٗا مِّنَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ شَيۡـٔٗا وَلَا
          يَسۡتَطِيعُونَ (73) فَلَا تَضۡرِبُواْ لِلَّهِ ٱلۡأَمۡثَالَۚ إِنَّ
          ٱللَّهَ يَعۡلَمُ وَأَنتُمۡ لَا تَعۡلَمُونَ (74) ۞ضَرَبَ ٱللَّهُ
          مَثَلًا عَبۡدٗا مَّمۡلُوكٗا لَّا يَقۡدِرُ عَلَىٰ شَيۡءٖ وَمَن
          رَّزَقۡنَٰهُ مِنَّا رِزۡقًا حَسَنٗا فَهُوَ يُنفِقُ مِنۡهُ سِرّٗا
          وَجَهۡرًاۖ هَلۡ يَسۡتَوُۥنَۚ ٱلۡحَمۡدُ لِلَّهِۚ بَلۡ أَكۡثَرُهُمۡ لَا
          يَعۡلَمُونَ (75) وَضَرَبَ ٱللَّهُ مَثَلٗا رَّجُلَيۡنِ أَحَدُهُمَآ
          أَبۡكَمُ لَا يَقۡدِرُ عَلَىٰ شَيۡءٖ وَهُوَ كَلٌّ عَلَىٰ مَوۡلَىٰهُ
          أَيۡنَمَا يُوَجِّههُّ لَا يَأۡتِ بِخَيۡرٍ هَلۡ يَسۡتَوِي هُوَ وَمَن
          يَأۡمُرُ بِٱلۡعَدۡلِ وَهُوَ عَلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ (76) وَلِلَّهِ
          غَيۡبُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۚ وَمَآ أَمۡرُ ٱلسَّاعَةِ إِلَّا
          كَلَمۡحِ ٱلۡبَصَرِ أَوۡ هُوَ أَقۡرَبُۚ إِنَّ ٱللَّهَ عَلَىٰ كُلِّ
          شَيۡءٖ قَدِيرٞ (77) وَٱللَّهُ أَخۡرَجَكُم مِّنۢ بُطُونِ أُمَّهَٰتِكُمۡ
          لَا تَعۡلَمُونَ شَيۡـٔٗا وَجَعَلَ لَكُمُ ٱلسَّمۡعَ وَٱلۡأَبۡصَٰرَ
          وَٱلۡأَفۡـِٔدَةَ لَعَلَّكُمۡ تَشۡكُرُونَ (78) أَلَمۡ يَرَوۡاْ إِلَى
          ٱلطَّيۡرِ مُسَخَّرَٰتٖ فِي جَوِّ ٱلسَّمَآءِ مَا يُمۡسِكُهُنَّ إِلَّا
          ٱللَّهُۚ إِنَّ فِي ذَٰلِكَ لَأٓيَٰتٖ لِّقَوۡمٖ يُؤۡمِنُونَ (79)
          وَٱللَّهُ جَعَلَ لَكُم مِّنۢ بُيُوتِكُمۡ سَكَنٗا وَجَعَلَ لَكُم مِّن
          جُلُودِ ٱلۡأَنۡعَٰمِ بُيُوتٗا تَسۡتَخِفُّونَهَا يَوۡمَ ظَعۡنِكُمۡ
          وَيَوۡمَ إِقَامَتِكُمۡ وَمِنۡ أَصۡوَافِهَا وَأَوۡبَارِهَا
          وَأَشۡعَارِهَآ أَثَٰثٗا وَمَتَٰعًا إِلَىٰ حِينٖ (80) وَٱللَّهُ جَعَلَ
          لَكُم مِّمَّا خَلَقَ ظِلَٰلٗا وَجَعَلَ لَكُم مِّنَ ٱلۡجِبَالِ
          أَكۡنَٰنٗا وَجَعَلَ لَكُمۡ سَرَٰبِيلَ تَقِيكُمُ ٱلۡحَرَّ وَسَرَٰبِيلَ
          تَقِيكُم بَأۡسَكُمۡۚ كَذَٰلِكَ يُتِمُّ نِعۡمَتَهُۥ عَلَيۡكُمۡ
          لَعَلَّكُمۡ تُسۡلِمُونَ (81) فَإِن تَوَلَّوۡاْ فَإِنَّمَا عَلَيۡكَ
          ٱلۡبَلَٰغُ ٱلۡمُبِينُ (82) يَعۡرِفُونَ نِعۡمَتَ ٱللَّهِ ثُمَّ
          يُنكِرُونَهَا وَأَكۡثَرُهُمُ ٱلۡكَٰفِرُونَ (83) وَيَوۡمَ نَبۡعَثُ مِن
          كُلِّ أُمَّةٖ شَهِيدٗا ثُمَّ لَا يُؤۡذَنُ لِلَّذِينَ كَفَرُواْ وَلَا
          هُمۡ يُسۡتَعۡتَبُونَ (84) وَإِذَا رَءَا ٱلَّذِينَ ظَلَمُواْ ٱلۡعَذَابَ
          فَلَا يُخَفَّفُ عَنۡهُمۡ وَلَا هُمۡ يُنظَرُونَ (85) وَإِذَا رَءَا
          ٱلَّذِينَ أَشۡرَكُواْ شُرَكَآءَهُمۡ قَالُواْ رَبَّنَا هَٰٓؤُلَآءِ
          شُرَكَآؤُنَا ٱلَّذِينَ كُنَّا نَدۡعُواْ مِن دُونِكَۖ فَأَلۡقَوۡاْ
          إِلَيۡهِمُ ٱلۡقَوۡلَ إِنَّكُمۡ لَكَٰذِبُونَ (86) وَأَلۡقَوۡاْ إِلَى
          ٱللَّهِ يَوۡمَئِذٍ ٱلسَّلَمَۖ وَضَلَّ عَنۡهُم مَّا كَانُواْ
          يَفۡتَرُونَ (87) ٱلَّذِينَ كَفَرُواْ وَصَدُّواْ عَن سَبِيلِ ٱللَّهِ
          زِدۡنَٰهُمۡ عَذَابٗا فَوۡقَ ٱلۡعَذَابِ بِمَا كَانُواْ يُفۡسِدُونَ (88)
          وَيَوۡمَ نَبۡعَثُ فِي كُلِّ أُمَّةٖ شَهِيدًا عَلَيۡهِم مِّنۡ
          أَنفُسِهِمۡۖ وَجِئۡنَا بِكَ شَهِيدًا عَلَىٰ هَٰٓؤُلَآءِۚ وَنَزَّلۡنَا
          عَلَيۡكَ ٱلۡكِتَٰبَ تِبۡيَٰنٗا لِّكُلِّ شَيۡءٖ وَهُدٗى وَرَحۡمَةٗ
          وَبُشۡرَىٰ لِلۡمُسۡلِمِينَ (89) ۞إِنَّ ٱللَّهَ يَأۡمُرُ بِٱلۡعَدۡلِ
          وَٱلۡإِحۡسَٰنِ وَإِيتَآيِٕ ذِي ٱلۡقُرۡبَىٰ وَيَنۡهَىٰ عَنِ
          ٱلۡفَحۡشَآءِ وَٱلۡمُنكَرِ وَٱلۡبَغۡيِۚ يَعِظُكُمۡ لَعَلَّكُمۡ
          تَذَكَّرُونَ (90) وَأَوۡفُواْ بِعَهۡدِ ٱللَّهِ إِذَا عَٰهَدتُّمۡ وَلَا
          تَنقُضُواْ ٱلۡأَيۡمَٰنَ بَعۡدَ تَوۡكِيدِهَا وَقَدۡ جَعَلۡتُمُ ٱللَّهَ
          عَلَيۡكُمۡ كَفِيلًاۚ إِنَّ ٱللَّهَ يَعۡلَمُ مَا تَفۡعَلُونَ (91) وَلَا
          تَكُونُواْ كَٱلَّتِي نَقَضَتۡ غَزۡلَهَا مِنۢ بَعۡدِ قُوَّةٍ أَنكَٰثٗا
          تَتَّخِذُونَ أَيۡمَٰنَكُمۡ دَخَلَۢا بَيۡنَكُمۡ أَن تَكُونَ أُمَّةٌ
          هِيَ أَرۡبَىٰ مِنۡ أُمَّةٍۚ إِنَّمَا يَبۡلُوكُمُ ٱللَّهُ بِهِۦۚ
          وَلَيُبَيِّنَنَّ لَكُمۡ يَوۡمَ ٱلۡقِيَٰمَةِ مَا كُنتُمۡ فِيهِ
          تَخۡتَلِفُونَ (92) وَلَوۡ شَآءَ ٱللَّهُ لَجَعَلَكُمۡ أُمَّةٗ
          وَٰحِدَةٗ وَلَٰكِن يُضِلُّ مَن يَشَآءُ وَيَهۡدِي مَن يَشَآءُۚ
          وَلَتُسۡـَٔلُنَّ عَمَّا كُنتُمۡ تَعۡمَلُونَ (93) وَلَا تَتَّخِذُوٓاْ
          أَيۡمَٰنَكُمۡ دَخَلَۢا بَيۡنَكُمۡ فَتَزِلَّ قَدَمُۢ بَعۡدَ ثُبُوتِهَا
          وَتَذُوقُواْ ٱلسُّوٓءَ بِمَا صَدَدتُّمۡ عَن سَبِيلِ ٱللَّهِ وَلَكُمۡ
          عَذَابٌ عَظِيمٞ (94) وَلَا تَشۡتَرُواْ بِعَهۡدِ ٱللَّهِ ثَمَنٗا
          قَلِيلًاۚ إِنَّمَا عِندَ ٱللَّهِ هُوَ خَيۡرٞ لَّكُمۡ إِن كُنتُمۡ
          تَعۡلَمُونَ (95) مَا عِندَكُمۡ يَنفَدُ وَمَا عِندَ ٱللَّهِ بَاقٖۗ
          وَلَنَجۡزِيَنَّ ٱلَّذِينَ صَبَرُوٓاْ أَجۡرَهُم بِأَحۡسَنِ مَا كَانُواْ
          يَعۡمَلُونَ (96) مَنۡ عَمِلَ صَٰلِحٗا مِّن ذَكَرٍ أَوۡ أُنثَىٰ وَهُوَ
          مُؤۡمِنٞ فَلَنُحۡيِيَنَّهُۥ حَيَوٰةٗ طَيِّبَةٗۖ وَلَنَجۡزِيَنَّهُمۡ
          أَجۡرَهُم بِأَحۡسَنِ مَا كَانُواْ يَعۡمَلُونَ (97) فَإِذَا قَرَأۡتَ
          ٱلۡقُرۡءَانَ فَٱسۡتَعِذۡ بِٱللَّهِ مِنَ ٱلشَّيۡطَٰنِ ٱلرَّجِيمِ (98)
          إِنَّهُۥ لَيۡسَ لَهُۥ سُلۡطَٰنٌ عَلَى ٱلَّذِينَ ءَامَنُواْ وَعَلَىٰ
          رَبِّهِمۡ يَتَوَكَّلُونَ (99) إِنَّمَا سُلۡطَٰنُهُۥ عَلَى ٱلَّذِينَ
          يَتَوَلَّوۡنَهُۥ وَٱلَّذِينَ هُم بِهِۦ مُشۡرِكُونَ (100) وَإِذَا
          بَدَّلۡنَآ ءَايَةٗ مَّكَانَ ءَايَةٖ وَٱللَّهُ أَعۡلَمُ بِمَا
          يُنَزِّلُ قَالُوٓاْ إِنَّمَآ أَنتَ مُفۡتَرِۭۚ بَلۡ أَكۡثَرُهُمۡ لَا
          يَعۡلَمُونَ (101) قُلۡ نَزَّلَهُۥ رُوحُ ٱلۡقُدُسِ مِن رَّبِّكَ
          بِٱلۡحَقِّ لِيُثَبِّتَ ٱلَّذِينَ ءَامَنُواْ وَهُدٗى وَبُشۡرَىٰ
          لِلۡمُسۡلِمِينَ (102) وَلَقَدۡ نَعۡلَمُ أَنَّهُمۡ يَقُولُونَ إِنَّمَا
          يُعَلِّمُهُۥ بَشَرٞۗ لِّسَانُ ٱلَّذِي يُلۡحِدُونَ إِلَيۡهِ أَعۡجَمِيّٞ
          وَهَٰذَا لِسَانٌ عَرَبِيّٞ مُّبِينٌ (103) إِنَّ ٱلَّذِينَ لَا
          يُؤۡمِنُونَ بِـَٔايَٰتِ ٱللَّهِ لَا يَهۡدِيهِمُ ٱللَّهُ وَلَهُمۡ
          عَذَابٌ أَلِيمٌ (104) إِنَّمَا يَفۡتَرِي ٱلۡكَذِبَ ٱلَّذِينَ لَا
          يُؤۡمِنُونَ بِـَٔايَٰتِ ٱللَّهِۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡكَٰذِبُونَ
          (105) مَن كَفَرَ بِٱللَّهِ مِنۢ بَعۡدِ إِيمَٰنِهِۦٓ إِلَّا مَنۡ
          أُكۡرِهَ وَقَلۡبُهُۥ مُطۡمَئِنُّۢ بِٱلۡإِيمَٰنِ وَلَٰكِن مَّن شَرَحَ
          بِٱلۡكُفۡرِ صَدۡرٗا فَعَلَيۡهِمۡ غَضَبٞ مِّنَ ٱللَّهِ وَلَهُمۡ عَذَابٌ
          عَظِيمٞ (106) ذَٰلِكَ بِأَنَّهُمُ ٱسۡتَحَبُّواْ ٱلۡحَيَوٰةَ ٱلدُّنۡيَا
          عَلَى ٱلۡأٓخِرَةِ وَأَنَّ ٱللَّهَ لَا يَهۡدِي ٱلۡقَوۡمَ ٱلۡكَٰفِرِينَ
          (107) أُوْلَٰٓئِكَ ٱلَّذِينَ طَبَعَ ٱللَّهُ عَلَىٰ قُلُوبِهِمۡ
          وَسَمۡعِهِمۡ وَأَبۡصَٰرِهِمۡۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡغَٰفِلُونَ (108)
          لَا جَرَمَ أَنَّهُمۡ فِي ٱلۡأٓخِرَةِ هُمُ ٱلۡخَٰسِرُونَ (109) ثُمَّ
          إِنَّ رَبَّكَ لِلَّذِينَ هَاجَرُواْ مِنۢ بَعۡدِ مَا فُتِنُواْ ثُمَّ
          جَٰهَدُواْ وَصَبَرُوٓاْ إِنَّ رَبَّكَ مِنۢ بَعۡدِهَا لَغَفُورٞ
          رَّحِيمٞ (110) ۞يَوۡمَ تَأۡتِي كُلُّ نَفۡسٖ تُجَٰدِلُ عَن نَّفۡسِهَا
          وَتُوَفَّىٰ كُلُّ نَفۡسٖ مَّا عَمِلَتۡ وَهُمۡ لَا يُظۡلَمُونَ (111)
          وَضَرَبَ ٱللَّهُ مَثَلٗا قَرۡيَةٗ كَانَتۡ ءَامِنَةٗ مُّطۡمَئِنَّةٗ
          يَأۡتِيهَا رِزۡقُهَا رَغَدٗا مِّن كُلِّ مَكَانٖ فَكَفَرَتۡ بِأَنۡعُمِ
          ٱللَّهِ فَأَذَٰقَهَا ٱللَّهُ لِبَاسَ ٱلۡجُوعِ وَٱلۡخَوۡفِ بِمَا
          كَانُواْ يَصۡنَعُونَ (112) وَلَقَدۡ جَآءَهُمۡ رَسُولٞ مِّنۡهُمۡ
          فَكَذَّبُوهُ فَأَخَذَهُمُ ٱلۡعَذَابُ وَهُمۡ ظَٰلِمُونَ (113) فَكُلُواْ
          مِمَّا رَزَقَكُمُ ٱللَّهُ حَلَٰلٗا طَيِّبٗا وَٱشۡكُرُواْ نِعۡمَتَ
          ٱللَّهِ إِن كُنتُمۡ إِيَّاهُ تَعۡبُدُونَ (114) إِنَّمَا حَرَّمَ
          عَلَيۡكُمُ ٱلۡمَيۡتَةَ وَٱلدَّمَ وَلَحۡمَ ٱلۡخِنزِيرِ وَمَآ أُهِلَّ
          لِغَيۡرِ ٱللَّهِ بِهِۦۖ فَمَنِ ٱضۡطُرَّ غَيۡرَ بَاغٖ وَلَا عَادٖ
          فَإِنَّ ٱللَّهَ غَفُورٞ رَّحِيمٞ (115) وَلَا تَقُولُواْ لِمَا تَصِفُ
          أَلۡسِنَتُكُمُ ٱلۡكَذِبَ هَٰذَا حَلَٰلٞ وَهَٰذَا حَرَامٞ
          لِّتَفۡتَرُواْ عَلَى ٱللَّهِ ٱلۡكَذِبَۚ إِنَّ ٱلَّذِينَ يَفۡتَرُونَ
          عَلَى ٱللَّهِ ٱلۡكَذِبَ لَا يُفۡلِحُونَ (116) مَتَٰعٞ قَلِيلٞ وَلَهُمۡ
          عَذَابٌ أَلِيمٞ (117) وَعَلَى ٱلَّذِينَ هَادُواْ حَرَّمۡنَا مَا
          قَصَصۡنَا عَلَيۡكَ مِن قَبۡلُۖ وَمَا ظَلَمۡنَٰهُمۡ وَلَٰكِن كَانُوٓاْ
          أَنفُسَهُمۡ يَظۡلِمُونَ (118) ثُمَّ إِنَّ رَبَّكَ لِلَّذِينَ عَمِلُواْ
          ٱلسُّوٓءَ بِجَهَٰلَةٖ ثُمَّ تَابُواْ مِنۢ بَعۡدِ ذَٰلِكَ
          وَأَصۡلَحُوٓاْ إِنَّ رَبَّكَ مِنۢ بَعۡدِهَا لَغَفُورٞ رَّحِيمٌ (119)
          إِنَّ إِبۡرَٰهِيمَ كَانَ أُمَّةٗ قَانِتٗا لِّلَّهِ حَنِيفٗا وَلَمۡ
          يَكُ مِنَ ٱلۡمُشۡرِكِينَ (120) شَاكِرٗا لِّأَنۡعُمِهِۚ ٱجۡتَبَىٰهُ
          وَهَدَىٰهُ إِلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ (121) وَءَاتَيۡنَٰهُ فِي
          ٱلدُّنۡيَا حَسَنَةٗۖ وَإِنَّهُۥ فِي ٱلۡأٓخِرَةِ لَمِنَ ٱلصَّٰلِحِينَ
          (122) ثُمَّ أَوۡحَيۡنَآ إِلَيۡكَ أَنِ ٱتَّبِعۡ مِلَّةَ إِبۡرَٰهِيمَ
          حَنِيفٗاۖ وَمَا كَانَ مِنَ ٱلۡمُشۡرِكِينَ (123) إِنَّمَا جُعِلَ
          ٱلسَّبۡتُ عَلَى ٱلَّذِينَ ٱخۡتَلَفُواْ فِيهِۚ وَإِنَّ رَبَّكَ
          لَيَحۡكُمُ بَيۡنَهُمۡ يَوۡمَ ٱلۡقِيَٰمَةِ فِيمَا كَانُواْ فِيهِ
          يَخۡتَلِفُونَ (124) ٱدۡعُ إِلَىٰ سَبِيلِ رَبِّكَ بِٱلۡحِكۡمَةِ
          وَٱلۡمَوۡعِظَةِ ٱلۡحَسَنَةِۖ وَجَٰدِلۡهُم بِٱلَّتِي هِيَ أَحۡسَنُۚ
          إِنَّ رَبَّكَ هُوَ أَعۡلَمُ بِمَن ضَلَّ عَن سَبِيلِهِۦ وَهُوَ أَعۡلَمُ
          بِٱلۡمُهۡتَدِينَ (125) وَإِنۡ عَاقَبۡتُمۡ فَعَاقِبُواْ بِمِثۡلِ مَا
          عُوقِبۡتُم بِهِۦۖ وَلَئِن صَبَرۡتُمۡ لَهُوَ خَيۡرٞ لِّلصَّٰبِرِينَ
          (126) وَٱصۡبِرۡ وَمَا صَبۡرُكَ إِلَّا بِٱللَّهِۚ وَلَا تَحۡزَنۡ
          عَلَيۡهِمۡ وَلَا تَكُ فِي ضَيۡقٖ مِّمَّا يَمۡكُرُونَ (127) إِنَّ
          ٱللَّهَ مَعَ ٱلَّذِينَ ٱتَّقَواْ وَّٱلَّذِينَ هُم مُّحۡسِنُونَ (128)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default Sixteen;
