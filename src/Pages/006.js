import React from 'react';
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";

const Six = () => {
  return (
    <div>
      <Helmet>
        <title>006 - سورة الأنعام</title>
      </Helmet>
      <Header />
      <Menu />
      <div className="sura">
        <p className="suraTitle">سورة الأنعام</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          ٱلۡحَمۡدُ لِلَّهِ ٱلَّذِي خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ وَجَعَلَ ٱلظُّلُمَٰتِ وَٱلنُّورَۖ ثُمَّ ٱلَّذِينَ كَفَرُواْ بِرَبِّهِمۡ يَعۡدِلُونَ (1) هُوَ ٱلَّذِي خَلَقَكُم مِّن طِينٖ ثُمَّ قَضَىٰٓ أَجَلٗاۖ وَأَجَلٞ مُّسَمًّى عِندَهُۥۖ ثُمَّ أَنتُمۡ تَمۡتَرُونَ (2) وَهُوَ ٱللَّهُ فِي ٱلسَّمَٰوَٰتِ وَفِي ٱلۡأَرۡضِ يَعۡلَمُ سِرَّكُمۡ وَجَهۡرَكُمۡ وَيَعۡلَمُ مَا تَكۡسِبُونَ (3) وَمَا تَأۡتِيهِم مِّنۡ ءَايَةٖ مِّنۡ ءَايَٰتِ رَبِّهِمۡ إِلَّا كَانُواْ عَنۡهَا مُعۡرِضِينَ (4) فَقَدۡ كَذَّبُواْ بِٱلۡحَقِّ لَمَّا جَآءَهُمۡ فَسَوۡفَ يَأۡتِيهِمۡ أَنۢبَٰٓؤُاْ مَا كَانُواْ بِهِۦ يَسۡتَهۡزِءُونَ (5) أَلَمۡ يَرَوۡاْ كَمۡ أَهۡلَكۡنَا مِن قَبۡلِهِم مِّن قَرۡنٖ مَّكَّنَّٰهُمۡ فِي ٱلۡأَرۡضِ مَا لَمۡ نُمَكِّن لَّكُمۡ وَأَرۡسَلۡنَا ٱلسَّمَآءَ عَلَيۡهِم مِّدۡرَارٗا وَجَعَلۡنَا ٱلۡأَنۡهَٰرَ تَجۡرِي مِن تَحۡتِهِمۡ فَأَهۡلَكۡنَٰهُم بِذُنُوبِهِمۡ وَأَنشَأۡنَا مِنۢ بَعۡدِهِمۡ قَرۡنًا ءَاخَرِينَ (6) وَلَوۡ نَزَّلۡنَا عَلَيۡكَ كِتَٰبٗا فِي قِرۡطَاسٖ فَلَمَسُوهُ بِأَيۡدِيهِمۡ لَقَالَ ٱلَّذِينَ كَفَرُوٓاْ إِنۡ هَٰذَآ إِلَّا سِحۡرٞ مُّبِينٞ (7) وَقَالُواْ لَوۡلَآ أُنزِلَ عَلَيۡهِ مَلَكٞۖ وَلَوۡ أَنزَلۡنَا مَلَكٗا لَّقُضِيَ ٱلۡأَمۡرُ ثُمَّ لَا يُنظَرُونَ (8) وَلَوۡ جَعَلۡنَٰهُ مَلَكٗا لَّجَعَلۡنَٰهُ رَجُلٗا وَلَلَبَسۡنَا عَلَيۡهِم مَّا يَلۡبِسُونَ (9) وَلَقَدِ ٱسۡتُهۡزِئَ بِرُسُلٖ مِّن قَبۡلِكَ فَحَاقَ بِٱلَّذِينَ سَخِرُواْ مِنۡهُم مَّا كَانُواْ بِهِۦ يَسۡتَهۡزِءُونَ (10) قُلۡ سِيرُواْ فِي ٱلۡأَرۡضِ ثُمَّ ٱنظُرُواْ كَيۡفَ كَانَ عَٰقِبَةُ ٱلۡمُكَذِّبِينَ (11) قُل لِّمَن مَّا فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۖ قُل لِّلَّهِۚ كَتَبَ عَلَىٰ نَفۡسِهِ ٱلرَّحۡمَةَۚ لَيَجۡمَعَنَّكُمۡ إِلَىٰ يَوۡمِ ٱلۡقِيَٰمَةِ لَا رَيۡبَ فِيهِۚ ٱلَّذِينَ خَسِرُوٓاْ أَنفُسَهُمۡ فَهُمۡ لَا يُؤۡمِنُونَ (12) ۞وَلَهُۥ مَا سَكَنَ فِي ٱلَّيۡلِ وَٱلنَّهَارِۚ وَهُوَ ٱلسَّمِيعُ ٱلۡعَلِيمُ (13) قُلۡ أَغَيۡرَ ٱللَّهِ أَتَّخِذُ وَلِيّٗا فَاطِرِ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَهُوَ يُطۡعِمُ وَلَا يُطۡعَمُۗ قُلۡ إِنِّيٓ أُمِرۡتُ أَنۡ أَكُونَ أَوَّلَ مَنۡ أَسۡلَمَۖ وَلَا تَكُونَنَّ مِنَ ٱلۡمُشۡرِكِينَ (14) قُلۡ إِنِّيٓ أَخَافُ إِنۡ عَصَيۡتُ رَبِّي عَذَابَ يَوۡمٍ عَظِيمٖ (15) مَّن يُصۡرَفۡ عَنۡهُ يَوۡمَئِذٖ فَقَدۡ رَحِمَهُۥۚ وَذَٰلِكَ ٱلۡفَوۡزُ ٱلۡمُبِينُ (16) وَإِن يَمۡسَسۡكَ ٱللَّهُ بِضُرّٖ فَلَا كَاشِفَ لَهُۥٓ إِلَّا هُوَۖ وَإِن يَمۡسَسۡكَ بِخَيۡرٖ فَهُوَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ (17) وَهُوَ ٱلۡقَاهِرُ فَوۡقَ عِبَادِهِۦۚ وَهُوَ ٱلۡحَكِيمُ ٱلۡخَبِيرُ (18) قُلۡ أَيُّ شَيۡءٍ أَكۡبَرُ شَهَٰدَةٗۖ قُلِ ٱللَّهُۖ شَهِيدُۢ بَيۡنِي وَبَيۡنَكُمۡۚ وَأُوحِيَ إِلَيَّ هَٰذَا ٱلۡقُرۡءَانُ لِأُنذِرَكُم بِهِۦ وَمَنۢ بَلَغَۚ أَئِنَّكُمۡ لَتَشۡهَدُونَ أَنَّ مَعَ ٱللَّهِ ءَالِهَةً أُخۡرَىٰۚ قُل لَّآ أَشۡهَدُۚ قُلۡ إِنَّمَا هُوَ إِلَٰهٞ وَٰحِدٞ وَإِنَّنِي بَرِيٓءٞ مِّمَّا تُشۡرِكُونَ (19) ٱلَّذِينَ ءَاتَيۡنَٰهُمُ ٱلۡكِتَٰبَ يَعۡرِفُونَهُۥ كَمَا يَعۡرِفُونَ أَبۡنَآءَهُمُۘ ٱلَّذِينَ خَسِرُوٓاْ أَنفُسَهُمۡ فَهُمۡ لَا يُؤۡمِنُونَ (20) وَمَنۡ أَظۡلَمُ مِمَّنِ ٱفۡتَرَىٰ عَلَى ٱللَّهِ كَذِبًا أَوۡ كَذَّبَ بِـَٔايَٰتِهِۦٓۚ إِنَّهُۥ لَا يُفۡلِحُ ٱلظَّٰلِمُونَ (21) وَيَوۡمَ نَحۡشُرُهُمۡ جَمِيعٗا ثُمَّ نَقُولُ لِلَّذِينَ أَشۡرَكُوٓاْ أَيۡنَ شُرَكَآؤُكُمُ ٱلَّذِينَ كُنتُمۡ تَزۡعُمُونَ (22) ثُمَّ لَمۡ تَكُن فِتۡنَتُهُمۡ إِلَّآ أَن قَالُواْ وَٱللَّهِ رَبِّنَا مَا كُنَّا مُشۡرِكِينَ (23) ٱنظُرۡ كَيۡفَ كَذَبُواْ عَلَىٰٓ أَنفُسِهِمۡۚ وَضَلَّ عَنۡهُم مَّا كَانُواْ يَفۡتَرُونَ (24) وَمِنۡهُم مَّن يَسۡتَمِعُ إِلَيۡكَۖ وَجَعَلۡنَا عَلَىٰ قُلُوبِهِمۡ أَكِنَّةً أَن يَفۡقَهُوهُ وَفِيٓ ءَاذَانِهِمۡ وَقۡرٗاۚ وَإِن يَرَوۡاْ كُلَّ ءَايَةٖ لَّا يُؤۡمِنُواْ بِهَاۖ حَتَّىٰٓ إِذَا جَآءُوكَ يُجَٰدِلُونَكَ يَقُولُ ٱلَّذِينَ كَفَرُوٓاْ إِنۡ هَٰذَآ إِلَّآ أَسَٰطِيرُ ٱلۡأَوَّلِينَ (25) وَهُمۡ يَنۡهَوۡنَ عَنۡهُ وَيَنۡـَٔوۡنَ عَنۡهُۖ وَإِن يُهۡلِكُونَ إِلَّآ أَنفُسَهُمۡ وَمَا يَشۡعُرُونَ (26) وَلَوۡ تَرَىٰٓ إِذۡ وُقِفُواْ عَلَى ٱلنَّارِ فَقَالُواْ يَٰلَيۡتَنَا نُرَدُّ وَلَا نُكَذِّبَ بِـَٔايَٰتِ رَبِّنَا وَنَكُونَ مِنَ ٱلۡمُؤۡمِنِينَ (27) بَلۡ بَدَا لَهُم مَّا كَانُواْ يُخۡفُونَ مِن قَبۡلُۖ وَلَوۡ رُدُّواْ لَعَادُواْ لِمَا نُهُواْ عَنۡهُ وَإِنَّهُمۡ لَكَٰذِبُونَ (28) وَقَالُوٓاْ إِنۡ هِيَ إِلَّا حَيَاتُنَا ٱلدُّنۡيَا وَمَا نَحۡنُ بِمَبۡعُوثِينَ (29) وَلَوۡ تَرَىٰٓ إِذۡ وُقِفُواْ عَلَىٰ رَبِّهِمۡۚ قَالَ أَلَيۡسَ هَٰذَا بِٱلۡحَقِّۚ قَالُواْ بَلَىٰ وَرَبِّنَاۚ قَالَ فَذُوقُواْ ٱلۡعَذَابَ بِمَا كُنتُمۡ تَكۡفُرُونَ (30) قَدۡ خَسِرَ ٱلَّذِينَ كَذَّبُواْ بِلِقَآءِ ٱللَّهِۖ حَتَّىٰٓ إِذَا جَآءَتۡهُمُ ٱلسَّاعَةُ بَغۡتَةٗ قَالُواْ يَٰحَسۡرَتَنَا عَلَىٰ مَا فَرَّطۡنَا فِيهَا وَهُمۡ يَحۡمِلُونَ أَوۡزَارَهُمۡ عَلَىٰ ظُهُورِهِمۡۚ أَلَا سَآءَ مَا يَزِرُونَ (31) وَمَا ٱلۡحَيَوٰةُ ٱلدُّنۡيَآ إِلَّا لَعِبٞ وَلَهۡوٞۖ وَلَلدَّارُ ٱلۡأٓخِرَةُ خَيۡرٞ لِّلَّذِينَ يَتَّقُونَۚ أَفَلَا تَعۡقِلُونَ (32) قَدۡ نَعۡلَمُ إِنَّهُۥ لَيَحۡزُنُكَ ٱلَّذِي يَقُولُونَۖ فَإِنَّهُمۡ لَا يُكَذِّبُونَكَ وَلَٰكِنَّ ٱلظَّٰلِمِينَ بِـَٔايَٰتِ ٱللَّهِ يَجۡحَدُونَ (33) وَلَقَدۡ كُذِّبَتۡ رُسُلٞ مِّن قَبۡلِكَ فَصَبَرُواْ عَلَىٰ مَا كُذِّبُواْ وَأُوذُواْ حَتَّىٰٓ أَتَىٰهُمۡ نَصۡرُنَاۚ وَلَا مُبَدِّلَ لِكَلِمَٰتِ ٱللَّهِۚ وَلَقَدۡ جَآءَكَ مِن نَّبَإِيْ ٱلۡمُرۡسَلِينَ (34) وَإِن كَانَ كَبُرَ عَلَيۡكَ إِعۡرَاضُهُمۡ فَإِنِ ٱسۡتَطَعۡتَ أَن تَبۡتَغِيَ نَفَقٗا فِي ٱلۡأَرۡضِ أَوۡ سُلَّمٗا فِي ٱلسَّمَآءِ فَتَأۡتِيَهُم بِـَٔايَةٖۚ وَلَوۡ شَآءَ ٱللَّهُ لَجَمَعَهُمۡ عَلَى ٱلۡهُدَىٰۚ فَلَا تَكُونَنَّ مِنَ ٱلۡجَٰهِلِينَ (35) ۞إِنَّمَا يَسۡتَجِيبُ ٱلَّذِينَ يَسۡمَعُونَۘ وَٱلۡمَوۡتَىٰ يَبۡعَثُهُمُ ٱللَّهُ ثُمَّ إِلَيۡهِ يُرۡجَعُونَ (36) وَقَالُواْ لَوۡلَا نُزِّلَ عَلَيۡهِ ءَايَةٞ مِّن رَّبِّهِۦۚ قُلۡ إِنَّ ٱللَّهَ قَادِرٌ عَلَىٰٓ أَن يُنَزِّلَ ءَايَةٗ وَلَٰكِنَّ أَكۡثَرَهُمۡ لَا يَعۡلَمُونَ (37) وَمَا مِن دَآبَّةٖ فِي ٱلۡأَرۡضِ وَلَا طَٰٓئِرٖ يَطِيرُ بِجَنَاحَيۡهِ إِلَّآ أُمَمٌ أَمۡثَالُكُمۚ مَّا فَرَّطۡنَا فِي ٱلۡكِتَٰبِ مِن شَيۡءٖۚ ثُمَّ إِلَىٰ رَبِّهِمۡ يُحۡشَرُونَ (38) وَٱلَّذِينَ كَذَّبُواْ بِـَٔايَٰتِنَا صُمّٞ وَبُكۡمٞ فِي ٱلظُّلُمَٰتِۗ مَن يَشَإِ ٱللَّهُ يُضۡلِلۡهُ وَمَن يَشَأۡ يَجۡعَلۡهُ عَلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ (39) قُلۡ أَرَءَيۡتَكُمۡ إِنۡ أَتَىٰكُمۡ عَذَابُ ٱللَّهِ أَوۡ أَتَتۡكُمُ ٱلسَّاعَةُ أَغَيۡرَ ٱللَّهِ تَدۡعُونَ إِن كُنتُمۡ صَٰدِقِينَ (40) بَلۡ إِيَّاهُ تَدۡعُونَ فَيَكۡشِفُ مَا تَدۡعُونَ إِلَيۡهِ إِن شَآءَ وَتَنسَوۡنَ مَا تُشۡرِكُونَ (41) وَلَقَدۡ أَرۡسَلۡنَآ إِلَىٰٓ أُمَمٖ مِّن قَبۡلِكَ فَأَخَذۡنَٰهُم بِٱلۡبَأۡسَآءِ وَٱلضَّرَّآءِ لَعَلَّهُمۡ يَتَضَرَّعُونَ (42) فَلَوۡلَآ إِذۡ جَآءَهُم بَأۡسُنَا تَضَرَّعُواْ وَلَٰكِن قَسَتۡ قُلُوبُهُمۡ وَزَيَّنَ لَهُمُ ٱلشَّيۡطَٰنُ مَا كَانُواْ يَعۡمَلُونَ (43) فَلَمَّا نَسُواْ مَا ذُكِّرُواْ بِهِۦ فَتَحۡنَا عَلَيۡهِمۡ أَبۡوَٰبَ كُلِّ شَيۡءٍ حَتَّىٰٓ إِذَا فَرِحُواْ بِمَآ أُوتُوٓاْ أَخَذۡنَٰهُم بَغۡتَةٗ فَإِذَا هُم مُّبۡلِسُونَ (44) فَقُطِعَ دَابِرُ ٱلۡقَوۡمِ ٱلَّذِينَ ظَلَمُواْۚ وَٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ (45) قُلۡ أَرَءَيۡتُمۡ إِنۡ أَخَذَ ٱللَّهُ سَمۡعَكُمۡ وَأَبۡصَٰرَكُمۡ وَخَتَمَ عَلَىٰ قُلُوبِكُم مَّنۡ إِلَٰهٌ غَيۡرُ ٱللَّهِ يَأۡتِيكُم بِهِۗ ٱنظُرۡ كَيۡفَ نُصَرِّفُ ٱلۡأٓيَٰتِ ثُمَّ هُمۡ يَصۡدِفُونَ (46) قُلۡ أَرَءَيۡتَكُمۡ إِنۡ أَتَىٰكُمۡ عَذَابُ ٱللَّهِ بَغۡتَةً أَوۡ جَهۡرَةً هَلۡ يُهۡلَكُ إِلَّا ٱلۡقَوۡمُ ٱلظَّٰلِمُونَ (47) وَمَا نُرۡسِلُ ٱلۡمُرۡسَلِينَ إِلَّا مُبَشِّرِينَ وَمُنذِرِينَۖ فَمَنۡ ءَامَنَ وَأَصۡلَحَ فَلَا خَوۡفٌ عَلَيۡهِمۡ وَلَا هُمۡ يَحۡزَنُونَ (48) وَٱلَّذِينَ كَذَّبُواْ بِـَٔايَٰتِنَا يَمَسُّهُمُ ٱلۡعَذَابُ بِمَا كَانُواْ يَفۡسُقُونَ (49) قُل لَّآ أَقُولُ لَكُمۡ عِندِي خَزَآئِنُ ٱللَّهِ وَلَآ أَعۡلَمُ ٱلۡغَيۡبَ وَلَآ أَقُولُ لَكُمۡ إِنِّي مَلَكٌۖ إِنۡ أَتَّبِعُ إِلَّا مَا يُوحَىٰٓ إِلَيَّۚ قُلۡ هَلۡ يَسۡتَوِي ٱلۡأَعۡمَىٰ وَٱلۡبَصِيرُۚ أَفَلَا تَتَفَكَّرُونَ (50) وَأَنذِرۡ بِهِ ٱلَّذِينَ يَخَافُونَ أَن يُحۡشَرُوٓاْ إِلَىٰ رَبِّهِمۡ لَيۡسَ لَهُم مِّن دُونِهِۦ وَلِيّٞ وَلَا شَفِيعٞ لَّعَلَّهُمۡ يَتَّقُونَ (51) وَلَا تَطۡرُدِ ٱلَّذِينَ يَدۡعُونَ رَبَّهُم بِٱلۡغَدَوٰةِ وَٱلۡعَشِيِّ يُرِيدُونَ وَجۡهَهُۥۖ مَا عَلَيۡكَ مِنۡ حِسَابِهِم مِّن شَيۡءٖ وَمَا مِنۡ حِسَابِكَ عَلَيۡهِم مِّن شَيۡءٖ فَتَطۡرُدَهُمۡ فَتَكُونَ مِنَ ٱلظَّٰلِمِينَ (52) وَكَذَٰلِكَ فَتَنَّا بَعۡضَهُم بِبَعۡضٖ لِّيَقُولُوٓاْ أَهَٰٓؤُلَآءِ مَنَّ ٱللَّهُ عَلَيۡهِم مِّنۢ بَيۡنِنَآۗ أَلَيۡسَ ٱللَّهُ بِأَعۡلَمَ بِٱلشَّٰكِرِينَ (53) وَإِذَا جَآءَكَ ٱلَّذِينَ يُؤۡمِنُونَ بِـَٔايَٰتِنَا فَقُلۡ سَلَٰمٌ عَلَيۡكُمۡۖ كَتَبَ رَبُّكُمۡ عَلَىٰ نَفۡسِهِ ٱلرَّحۡمَةَ أَنَّهُۥ مَنۡ عَمِلَ مِنكُمۡ سُوٓءَۢا بِجَهَٰلَةٖ ثُمَّ تَابَ مِنۢ بَعۡدِهِۦ وَأَصۡلَحَ فَأَنَّهُۥ غَفُورٞ رَّحِيمٞ (54) وَكَذَٰلِكَ نُفَصِّلُ ٱلۡأٓيَٰتِ وَلِتَسۡتَبِينَ سَبِيلُ ٱلۡمُجۡرِمِينَ (55) قُلۡ إِنِّي نُهِيتُ أَنۡ أَعۡبُدَ ٱلَّذِينَ تَدۡعُونَ مِن دُونِ ٱللَّهِۚ قُل لَّآ أَتَّبِعُ أَهۡوَآءَكُمۡ قَدۡ ضَلَلۡتُ إِذٗا وَمَآ أَنَا۠ مِنَ ٱلۡمُهۡتَدِينَ (56) قُلۡ إِنِّي عَلَىٰ بَيِّنَةٖ مِّن رَّبِّي وَكَذَّبۡتُم بِهِۦۚ مَا عِندِي مَا تَسۡتَعۡجِلُونَ بِهِۦٓۚ إِنِ ٱلۡحُكۡمُ إِلَّا لِلَّهِۖ يَقُصُّ ٱلۡحَقَّۖ وَهُوَ خَيۡرُ ٱلۡفَٰصِلِينَ (57) قُل لَّوۡ أَنَّ عِندِي مَا تَسۡتَعۡجِلُونَ بِهِۦ لَقُضِيَ ٱلۡأَمۡرُ بَيۡنِي وَبَيۡنَكُمۡۗ وَٱللَّهُ أَعۡلَمُ بِٱلظَّٰلِمِينَ (58) ۞وَعِندَهُۥ مَفَاتِحُ ٱلۡغَيۡبِ لَا يَعۡلَمُهَآ إِلَّا هُوَۚ وَيَعۡلَمُ مَا فِي ٱلۡبَرِّ وَٱلۡبَحۡرِۚ وَمَا تَسۡقُطُ مِن وَرَقَةٍ إِلَّا يَعۡلَمُهَا وَلَا حَبَّةٖ فِي ظُلُمَٰتِ ٱلۡأَرۡضِ وَلَا رَطۡبٖ وَلَا يَابِسٍ إِلَّا فِي كِتَٰبٖ مُّبِينٖ (59) وَهُوَ ٱلَّذِي يَتَوَفَّىٰكُم بِٱلَّيۡلِ وَيَعۡلَمُ مَا جَرَحۡتُم بِٱلنَّهَارِ ثُمَّ يَبۡعَثُكُمۡ فِيهِ لِيُقۡضَىٰٓ أَجَلٞ مُّسَمّٗىۖ ثُمَّ إِلَيۡهِ مَرۡجِعُكُمۡ ثُمَّ يُنَبِّئُكُم بِمَا كُنتُمۡ تَعۡمَلُونَ (60) وَهُوَ ٱلۡقَاهِرُ فَوۡقَ عِبَادِهِۦۖ وَيُرۡسِلُ عَلَيۡكُمۡ حَفَظَةً حَتَّىٰٓ إِذَا جَآءَ أَحَدَكُمُ ٱلۡمَوۡتُ تَوَفَّتۡهُ رُسُلُنَا وَهُمۡ لَا يُفَرِّطُونَ (61) ثُمَّ رُدُّوٓاْ إِلَى ٱللَّهِ مَوۡلَىٰهُمُ ٱلۡحَقِّۚ أَلَا لَهُ ٱلۡحُكۡمُ وَهُوَ أَسۡرَعُ ٱلۡحَٰسِبِينَ (62) قُلۡ مَن يُنَجِّيكُم مِّن ظُلُمَٰتِ ٱلۡبَرِّ وَٱلۡبَحۡرِ تَدۡعُونَهُۥ تَضَرُّعٗا وَخُفۡيَةٗ لَّئِنۡ أَنجَىٰنَا مِنۡ هَٰذِهِۦ لَنَكُونَنَّ مِنَ ٱلشَّٰكِرِينَ (63) قُلِ ٱللَّهُ يُنَجِّيكُم مِّنۡهَا وَمِن كُلِّ كَرۡبٖ ثُمَّ أَنتُمۡ تُشۡرِكُونَ (64) قُلۡ هُوَ ٱلۡقَادِرُ عَلَىٰٓ أَن يَبۡعَثَ عَلَيۡكُمۡ عَذَابٗا مِّن فَوۡقِكُمۡ أَوۡ مِن تَحۡتِ أَرۡجُلِكُمۡ أَوۡ يَلۡبِسَكُمۡ شِيَعٗا وَيُذِيقَ بَعۡضَكُم بَأۡسَ بَعۡضٍۗ ٱنظُرۡ كَيۡفَ نُصَرِّفُ ٱلۡأٓيَٰتِ لَعَلَّهُمۡ يَفۡقَهُونَ (65) وَكَذَّبَ بِهِۦ قَوۡمُكَ وَهُوَ ٱلۡحَقُّۚ قُل لَّسۡتُ عَلَيۡكُم بِوَكِيلٖ (66) لِّكُلِّ نَبَإٖ مُّسۡتَقَرّٞۚ وَسَوۡفَ تَعۡلَمُونَ (67) وَإِذَا رَأَيۡتَ ٱلَّذِينَ يَخُوضُونَ فِيٓ ءَايَٰتِنَا فَأَعۡرِضۡ عَنۡهُمۡ حَتَّىٰ يَخُوضُواْ فِي حَدِيثٍ غَيۡرِهِۦۚ وَإِمَّا يُنسِيَنَّكَ ٱلشَّيۡطَٰنُ فَلَا تَقۡعُدۡ بَعۡدَ ٱلذِّكۡرَىٰ مَعَ ٱلۡقَوۡمِ ٱلظَّٰلِمِينَ (68) وَمَا عَلَى ٱلَّذِينَ يَتَّقُونَ مِنۡ حِسَابِهِم مِّن شَيۡءٖ وَلَٰكِن ذِكۡرَىٰ لَعَلَّهُمۡ يَتَّقُونَ (69) وَذَرِ ٱلَّذِينَ ٱتَّخَذُواْ دِينَهُمۡ لَعِبٗا وَلَهۡوٗا وَغَرَّتۡهُمُ ٱلۡحَيَوٰةُ ٱلدُّنۡيَاۚ وَذَكِّرۡ بِهِۦٓ أَن تُبۡسَلَ نَفۡسُۢ بِمَا كَسَبَتۡ لَيۡسَ لَهَا مِن دُونِ ٱللَّهِ وَلِيّٞ وَلَا شَفِيعٞ وَإِن تَعۡدِلۡ كُلَّ عَدۡلٖ لَّا يُؤۡخَذۡ مِنۡهَآۗ أُوْلَٰٓئِكَ ٱلَّذِينَ أُبۡسِلُواْ بِمَا كَسَبُواْۖ لَهُمۡ شَرَابٞ مِّنۡ حَمِيمٖ وَعَذَابٌ أَلِيمُۢ بِمَا كَانُواْ يَكۡفُرُونَ (70) قُلۡ أَنَدۡعُواْ مِن دُونِ ٱللَّهِ مَا لَا يَنفَعُنَا وَلَا يَضُرُّنَا وَنُرَدُّ عَلَىٰٓ أَعۡقَابِنَا بَعۡدَ إِذۡ هَدَىٰنَا ٱللَّهُ كَٱلَّذِي ٱسۡتَهۡوَتۡهُ ٱلشَّيَٰطِينُ فِي ٱلۡأَرۡضِ حَيۡرَانَ لَهُۥٓ أَصۡحَٰبٞ يَدۡعُونَهُۥٓ إِلَى ٱلۡهُدَى ٱئۡتِنَاۗ قُلۡ إِنَّ هُدَى ٱللَّهِ هُوَ ٱلۡهُدَىٰۖ وَأُمِرۡنَا لِنُسۡلِمَ لِرَبِّ ٱلۡعَٰلَمِينَ (71) وَأَنۡ أَقِيمُواْ ٱلصَّلَوٰةَ وَٱتَّقُوهُۚ وَهُوَ ٱلَّذِيٓ إِلَيۡهِ تُحۡشَرُونَ (72) وَهُوَ ٱلَّذِي خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ بِٱلۡحَقِّۖ وَيَوۡمَ يَقُولُ كُن فَيَكُونُۚ قَوۡلُهُ ٱلۡحَقُّۚ وَلَهُ ٱلۡمُلۡكُ يَوۡمَ يُنفَخُ فِي ٱلصُّورِۚ عَٰلِمُ ٱلۡغَيۡبِ وَٱلشَّهَٰدَةِۚ وَهُوَ ٱلۡحَكِيمُ ٱلۡخَبِيرُ (73) ۞وَإِذۡ قَالَ إِبۡرَٰهِيمُ لِأَبِيهِ ءَازَرَ أَتَتَّخِذُ أَصۡنَامًا ءَالِهَةً إِنِّيٓ أَرَىٰكَ وَقَوۡمَكَ فِي ضَلَٰلٖ مُّبِينٖ (74) وَكَذَٰلِكَ نُرِيٓ إِبۡرَٰهِيمَ مَلَكُوتَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَلِيَكُونَ مِنَ ٱلۡمُوقِنِينَ (75) فَلَمَّا جَنَّ عَلَيۡهِ ٱلَّيۡلُ رَءَا كَوۡكَبٗاۖ قَالَ هَٰذَا رَبِّيۖ فَلَمَّآ أَفَلَ قَالَ لَآ أُحِبُّ ٱلۡأٓفِلِينَ (76) فَلَمَّا رَءَا ٱلۡقَمَرَ بَازِغٗا قَالَ هَٰذَا رَبِّيۖ فَلَمَّآ أَفَلَ قَالَ لَئِن لَّمۡ يَهۡدِنِي رَبِّي لَأَكُونَنَّ مِنَ ٱلۡقَوۡمِ ٱلضَّآلِّينَ (77) فَلَمَّا رَءَا ٱلشَّمۡسَ بَازِغَةٗ قَالَ هَٰذَا رَبِّي هَٰذَآ أَكۡبَرُۖ فَلَمَّآ أَفَلَتۡ قَالَ يَٰقَوۡمِ إِنِّي بَرِيٓءٞ مِّمَّا تُشۡرِكُونَ (78) إِنِّي وَجَّهۡتُ وَجۡهِيَ لِلَّذِي فَطَرَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ حَنِيفٗاۖ وَمَآ أَنَا۠ مِنَ ٱلۡمُشۡرِكِينَ (79) وَحَآجَّهُۥ قَوۡمُهُۥۚ قَالَ أَتُحَٰٓجُّوٓنِّي فِي ٱللَّهِ وَقَدۡ هَدَىٰنِۚ وَلَآ أَخَافُ مَا تُشۡرِكُونَ بِهِۦٓ إِلَّآ أَن يَشَآءَ رَبِّي شَيۡـٔٗاۚ وَسِعَ رَبِّي كُلَّ شَيۡءٍ عِلۡمًاۚ أَفَلَا تَتَذَكَّرُونَ (80) وَكَيۡفَ أَخَافُ مَآ أَشۡرَكۡتُمۡ وَلَا تَخَافُونَ أَنَّكُمۡ أَشۡرَكۡتُم بِٱللَّهِ مَا لَمۡ يُنَزِّلۡ بِهِۦ عَلَيۡكُمۡ سُلۡطَٰنٗاۚ فَأَيُّ ٱلۡفَرِيقَيۡنِ أَحَقُّ بِٱلۡأَمۡنِۖ إِن كُنتُمۡ تَعۡلَمُونَ (81) ٱلَّذِينَ ءَامَنُواْ وَلَمۡ يَلۡبِسُوٓاْ إِيمَٰنَهُم بِظُلۡمٍ أُوْلَٰٓئِكَ لَهُمُ ٱلۡأَمۡنُ وَهُم مُّهۡتَدُونَ (82) وَتِلۡكَ حُجَّتُنَآ ءَاتَيۡنَٰهَآ إِبۡرَٰهِيمَ عَلَىٰ قَوۡمِهِۦۚ نَرۡفَعُ دَرَجَٰتٖ مَّن نَّشَآءُۗ إِنَّ رَبَّكَ حَكِيمٌ عَلِيمٞ (83) وَوَهَبۡنَا لَهُۥٓ إِسۡحَٰقَ وَيَعۡقُوبَۚ كُلًّا هَدَيۡنَاۚ وَنُوحًا هَدَيۡنَا مِن قَبۡلُۖ وَمِن ذُرِّيَّتِهِۦ دَاوُۥدَ وَسُلَيۡمَٰنَ وَأَيُّوبَ وَيُوسُفَ وَمُوسَىٰ وَهَٰرُونَۚ وَكَذَٰلِكَ نَجۡزِي ٱلۡمُحۡسِنِينَ (84) وَزَكَرِيَّا وَيَحۡيَىٰ وَعِيسَىٰ وَإِلۡيَاسَۖ كُلّٞ مِّنَ ٱلصَّٰلِحِينَ (85) وَإِسۡمَٰعِيلَ وَٱلۡيَسَعَ وَيُونُسَ وَلُوطٗاۚ وَكُلّٗا فَضَّلۡنَا عَلَى ٱلۡعَٰلَمِينَ (86) وَمِنۡ ءَابَآئِهِمۡ وَذُرِّيَّٰتِهِمۡ وَإِخۡوَٰنِهِمۡۖ وَٱجۡتَبَيۡنَٰهُمۡ وَهَدَيۡنَٰهُمۡ إِلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ (87) ذَٰلِكَ هُدَى ٱللَّهِ يَهۡدِي بِهِۦ مَن يَشَآءُ مِنۡ عِبَادِهِۦۚ وَلَوۡ أَشۡرَكُواْ لَحَبِطَ عَنۡهُم مَّا كَانُواْ يَعۡمَلُونَ (88) أُوْلَٰٓئِكَ ٱلَّذِينَ ءَاتَيۡنَٰهُمُ ٱلۡكِتَٰبَ وَٱلۡحُكۡمَ وَٱلنُّبُوَّةَۚ فَإِن يَكۡفُرۡ بِهَا هَٰٓؤُلَآءِ فَقَدۡ وَكَّلۡنَا بِهَا قَوۡمٗا لَّيۡسُواْ بِهَا بِكَٰفِرِينَ (89) أُوْلَٰٓئِكَ ٱلَّذِينَ هَدَى ٱللَّهُۖ فَبِهُدَىٰهُمُ ٱقۡتَدِهۡۗ قُل لَّآ أَسۡـَٔلُكُمۡ عَلَيۡهِ أَجۡرًاۖ إِنۡ هُوَ إِلَّا ذِكۡرَىٰ لِلۡعَٰلَمِينَ (90) وَمَا قَدَرُواْ ٱللَّهَ حَقَّ قَدۡرِهِۦٓ إِذۡ قَالُواْ مَآ أَنزَلَ ٱللَّهُ عَلَىٰ بَشَرٖ مِّن شَيۡءٖۗ قُلۡ مَنۡ أَنزَلَ ٱلۡكِتَٰبَ ٱلَّذِي جَآءَ بِهِۦ مُوسَىٰ نُورٗا وَهُدٗى لِّلنَّاسِۖ تَجۡعَلُونَهُۥ قَرَاطِيسَ تُبۡدُونَهَا وَتُخۡفُونَ كَثِيرٗاۖ وَعُلِّمۡتُم مَّا لَمۡ تَعۡلَمُوٓاْ أَنتُمۡ وَلَآ ءَابَآؤُكُمۡۖ قُلِ ٱللَّهُۖ ثُمَّ ذَرۡهُمۡ فِي خَوۡضِهِمۡ يَلۡعَبُونَ (91) وَهَٰذَا كِتَٰبٌ أَنزَلۡنَٰهُ مُبَارَكٞ مُّصَدِّقُ ٱلَّذِي بَيۡنَ يَدَيۡهِ وَلِتُنذِرَ أُمَّ ٱلۡقُرَىٰ وَمَنۡ حَوۡلَهَاۚ وَٱلَّذِينَ يُؤۡمِنُونَ بِٱلۡأٓخِرَةِ يُؤۡمِنُونَ بِهِۦۖ وَهُمۡ عَلَىٰ صَلَاتِهِمۡ يُحَافِظُونَ (92) وَمَنۡ أَظۡلَمُ مِمَّنِ ٱفۡتَرَىٰ عَلَى ٱللَّهِ كَذِبًا أَوۡ قَالَ أُوحِيَ إِلَيَّ وَلَمۡ يُوحَ إِلَيۡهِ شَيۡءٞ وَمَن قَالَ سَأُنزِلُ مِثۡلَ مَآ أَنزَلَ ٱللَّهُۗ وَلَوۡ تَرَىٰٓ إِذِ ٱلظَّٰلِمُونَ فِي غَمَرَٰتِ ٱلۡمَوۡتِ وَٱلۡمَلَٰٓئِكَةُ بَاسِطُوٓاْ أَيۡدِيهِمۡ أَخۡرِجُوٓاْ أَنفُسَكُمُۖ ٱلۡيَوۡمَ تُجۡزَوۡنَ عَذَابَ ٱلۡهُونِ بِمَا كُنتُمۡ تَقُولُونَ عَلَى ٱللَّهِ غَيۡرَ ٱلۡحَقِّ وَكُنتُمۡ عَنۡ ءَايَٰتِهِۦ تَسۡتَكۡبِرُونَ (93) وَلَقَدۡ جِئۡتُمُونَا فُرَٰدَىٰ كَمَا خَلَقۡنَٰكُمۡ أَوَّلَ مَرَّةٖ وَتَرَكۡتُم مَّا خَوَّلۡنَٰكُمۡ وَرَآءَ ظُهُورِكُمۡۖ وَمَا نَرَىٰ مَعَكُمۡ شُفَعَآءَكُمُ ٱلَّذِينَ زَعَمۡتُمۡ أَنَّهُمۡ فِيكُمۡ شُرَكَٰٓؤُاْۚ لَقَد تَّقَطَّعَ بَيۡنَكُمۡ وَضَلَّ عَنكُم مَّا كُنتُمۡ تَزۡعُمُونَ (94) ۞إِنَّ ٱللَّهَ فَالِقُ ٱلۡحَبِّ وَٱلنَّوَىٰۖ يُخۡرِجُ ٱلۡحَيَّ مِنَ ٱلۡمَيِّتِ وَمُخۡرِجُ ٱلۡمَيِّتِ مِنَ ٱلۡحَيِّۚ ذَٰلِكُمُ ٱللَّهُۖ فَأَنَّىٰ تُؤۡفَكُونَ (95) فَالِقُ ٱلۡإِصۡبَاحِ وَجَعَلَ ٱلَّيۡلَ سَكَنٗا وَٱلشَّمۡسَ وَٱلۡقَمَرَ حُسۡبَانٗاۚ ذَٰلِكَ تَقۡدِيرُ ٱلۡعَزِيزِ ٱلۡعَلِيمِ (96) وَهُوَ ٱلَّذِي جَعَلَ لَكُمُ ٱلنُّجُومَ لِتَهۡتَدُواْ بِهَا فِي ظُلُمَٰتِ ٱلۡبَرِّ وَٱلۡبَحۡرِۗ قَدۡ فَصَّلۡنَا ٱلۡأٓيَٰتِ لِقَوۡمٖ يَعۡلَمُونَ (97) وَهُوَ ٱلَّذِيٓ أَنشَأَكُم مِّن نَّفۡسٖ وَٰحِدَةٖ فَمُسۡتَقَرّٞ وَمُسۡتَوۡدَعٞۗ قَدۡ فَصَّلۡنَا ٱلۡأٓيَٰتِ لِقَوۡمٖ يَفۡقَهُونَ (98) وَهُوَ ٱلَّذِيٓ أَنزَلَ مِنَ ٱلسَّمَآءِ مَآءٗ فَأَخۡرَجۡنَا بِهِۦ نَبَاتَ كُلِّ شَيۡءٖ فَأَخۡرَجۡنَا مِنۡهُ خَضِرٗا نُّخۡرِجُ مِنۡهُ حَبّٗا مُّتَرَاكِبٗا وَمِنَ ٱلنَّخۡلِ مِن طَلۡعِهَا قِنۡوَانٞ دَانِيَةٞ وَجَنَّٰتٖ مِّنۡ أَعۡنَابٖ وَٱلزَّيۡتُونَ وَٱلرُّمَّانَ مُشۡتَبِهٗا وَغَيۡرَ مُتَشَٰبِهٍۗ ٱنظُرُوٓاْ إِلَىٰ ثَمَرِهِۦٓ إِذَآ أَثۡمَرَ وَيَنۡعِهِۦٓۚ إِنَّ فِي ذَٰلِكُمۡ لَأٓيَٰتٖ لِّقَوۡمٖ يُؤۡمِنُونَ (99) وَجَعَلُواْ لِلَّهِ شُرَكَآءَ ٱلۡجِنَّ وَخَلَقَهُمۡۖ وَخَرَقُواْ لَهُۥ بَنِينَ وَبَنَٰتِۭ بِغَيۡرِ عِلۡمٖۚ سُبۡحَٰنَهُۥ وَتَعَٰلَىٰ عَمَّا يَصِفُونَ (100) بَدِيعُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۖ أَنَّىٰ يَكُونُ لَهُۥ وَلَدٞ وَلَمۡ تَكُن لَّهُۥ صَٰحِبَةٞۖ وَخَلَقَ كُلَّ شَيۡءٖۖ وَهُوَ بِكُلِّ شَيۡءٍ عَلِيمٞ (101) ذَٰلِكُمُ ٱللَّهُ رَبُّكُمۡۖ لَآ إِلَٰهَ إِلَّا هُوَۖ خَٰلِقُ كُلِّ شَيۡءٖ فَٱعۡبُدُوهُۚ وَهُوَ عَلَىٰ كُلِّ شَيۡءٖ وَكِيلٞ (102) لَّا تُدۡرِكُهُ ٱلۡأَبۡصَٰرُ وَهُوَ يُدۡرِكُ ٱلۡأَبۡصَٰرَۖ وَهُوَ ٱللَّطِيفُ ٱلۡخَبِيرُ (103) قَدۡ جَآءَكُم بَصَآئِرُ مِن رَّبِّكُمۡۖ فَمَنۡ أَبۡصَرَ فَلِنَفۡسِهِۦۖ وَمَنۡ عَمِيَ فَعَلَيۡهَاۚ وَمَآ أَنَا۠ عَلَيۡكُم بِحَفِيظٖ (104) وَكَذَٰلِكَ نُصَرِّفُ ٱلۡأٓيَٰتِ وَلِيَقُولُواْ دَرَسۡتَ وَلِنُبَيِّنَهُۥ لِقَوۡمٖ يَعۡلَمُونَ (105) ٱتَّبِعۡ مَآ أُوحِيَ إِلَيۡكَ مِن رَّبِّكَۖ لَآ إِلَٰهَ إِلَّا هُوَۖ وَأَعۡرِضۡ عَنِ ٱلۡمُشۡرِكِينَ (106) وَلَوۡ شَآءَ ٱللَّهُ مَآ أَشۡرَكُواْۗ وَمَا جَعَلۡنَٰكَ عَلَيۡهِمۡ حَفِيظٗاۖ وَمَآ أَنتَ عَلَيۡهِم بِوَكِيلٖ (107) وَلَا تَسُبُّواْ ٱلَّذِينَ يَدۡعُونَ مِن دُونِ ٱللَّهِ فَيَسُبُّواْ ٱللَّهَ عَدۡوَۢا بِغَيۡرِ عِلۡمٖۗ كَذَٰلِكَ زَيَّنَّا لِكُلِّ أُمَّةٍ عَمَلَهُمۡ ثُمَّ إِلَىٰ رَبِّهِم مَّرۡجِعُهُمۡ فَيُنَبِّئُهُم بِمَا كَانُواْ يَعۡمَلُونَ (108) وَأَقۡسَمُواْ بِٱللَّهِ جَهۡدَ أَيۡمَٰنِهِمۡ لَئِن جَآءَتۡهُمۡ ءَايَةٞ لَّيُؤۡمِنُنَّ بِهَاۚ قُلۡ إِنَّمَا ٱلۡأٓيَٰتُ عِندَ ٱللَّهِۖ وَمَا يُشۡعِرُكُمۡ أَنَّهَآ إِذَا جَآءَتۡ لَا يُؤۡمِنُونَ (109) وَنُقَلِّبُ أَفۡـِٔدَتَهُمۡ وَأَبۡصَٰرَهُمۡ كَمَا لَمۡ يُؤۡمِنُواْ بِهِۦٓ أَوَّلَ مَرَّةٖ وَنَذَرُهُمۡ فِي طُغۡيَٰنِهِمۡ يَعۡمَهُونَ (110) ۞وَلَوۡ أَنَّنَا نَزَّلۡنَآ إِلَيۡهِمُ ٱلۡمَلَٰٓئِكَةَ وَكَلَّمَهُمُ ٱلۡمَوۡتَىٰ وَحَشَرۡنَا عَلَيۡهِمۡ كُلَّ شَيۡءٖ قُبُلٗا مَّا كَانُواْ لِيُؤۡمِنُوٓاْ إِلَّآ أَن يَشَآءَ ٱللَّهُ وَلَٰكِنَّ أَكۡثَرَهُمۡ يَجۡهَلُونَ (111) وَكَذَٰلِكَ جَعَلۡنَا لِكُلِّ نَبِيٍّ عَدُوّٗا شَيَٰطِينَ ٱلۡإِنسِ وَٱلۡجِنِّ يُوحِي بَعۡضُهُمۡ إِلَىٰ بَعۡضٖ زُخۡرُفَ ٱلۡقَوۡلِ غُرُورٗاۚ وَلَوۡ شَآءَ رَبُّكَ مَا فَعَلُوهُۖ فَذَرۡهُمۡ وَمَا يَفۡتَرُونَ (112) وَلِتَصۡغَىٰٓ إِلَيۡهِ أَفۡـِٔدَةُ ٱلَّذِينَ لَا يُؤۡمِنُونَ بِٱلۡأٓخِرَةِ وَلِيَرۡضَوۡهُ وَلِيَقۡتَرِفُواْ مَا هُم مُّقۡتَرِفُونَ (113) أَفَغَيۡرَ ٱللَّهِ أَبۡتَغِي حَكَمٗا وَهُوَ ٱلَّذِيٓ أَنزَلَ إِلَيۡكُمُ ٱلۡكِتَٰبَ مُفَصَّلٗاۚ وَٱلَّذِينَ ءَاتَيۡنَٰهُمُ ٱلۡكِتَٰبَ يَعۡلَمُونَ أَنَّهُۥ مُنَزَّلٞ مِّن رَّبِّكَ بِٱلۡحَقِّۖ فَلَا تَكُونَنَّ مِنَ ٱلۡمُمۡتَرِينَ (114) وَتَمَّتۡ كَلِمَتُ رَبِّكَ صِدۡقٗا وَعَدۡلٗاۚ لَّا مُبَدِّلَ لِكَلِمَٰتِهِۦۚ وَهُوَ ٱلسَّمِيعُ ٱلۡعَلِيمُ (115) وَإِن تُطِعۡ أَكۡثَرَ مَن فِي ٱلۡأَرۡضِ يُضِلُّوكَ عَن سَبِيلِ ٱللَّهِۚ إِن يَتَّبِعُونَ إِلَّا ٱلظَّنَّ وَإِنۡ هُمۡ إِلَّا يَخۡرُصُونَ (116) إِنَّ رَبَّكَ هُوَ أَعۡلَمُ مَن يَضِلُّ عَن سَبِيلِهِۦۖ وَهُوَ أَعۡلَمُ بِٱلۡمُهۡتَدِينَ (117) فَكُلُواْ مِمَّا ذُكِرَ ٱسۡمُ ٱللَّهِ عَلَيۡهِ إِن كُنتُم بِـَٔايَٰتِهِۦ مُؤۡمِنِينَ (118) وَمَا لَكُمۡ أَلَّا تَأۡكُلُواْ مِمَّا ذُكِرَ ٱسۡمُ ٱللَّهِ عَلَيۡهِ وَقَدۡ فَصَّلَ لَكُم مَّا حَرَّمَ عَلَيۡكُمۡ إِلَّا مَا ٱضۡطُرِرۡتُمۡ إِلَيۡهِۗ وَإِنَّ كَثِيرٗا لَّيُضِلُّونَ بِأَهۡوَآئِهِم بِغَيۡرِ عِلۡمٍۚ إِنَّ رَبَّكَ هُوَ أَعۡلَمُ بِٱلۡمُعۡتَدِينَ (119) وَذَرُواْ ظَٰهِرَ ٱلۡإِثۡمِ وَبَاطِنَهُۥٓۚ إِنَّ ٱلَّذِينَ يَكۡسِبُونَ ٱلۡإِثۡمَ سَيُجۡزَوۡنَ بِمَا كَانُواْ يَقۡتَرِفُونَ (120) وَلَا تَأۡكُلُواْ مِمَّا لَمۡ يُذۡكَرِ ٱسۡمُ ٱللَّهِ عَلَيۡهِ وَإِنَّهُۥ لَفِسۡقٞۗ وَإِنَّ ٱلشَّيَٰطِينَ لَيُوحُونَ إِلَىٰٓ أَوۡلِيَآئِهِمۡ لِيُجَٰدِلُوكُمۡۖ وَإِنۡ أَطَعۡتُمُوهُمۡ إِنَّكُمۡ لَمُشۡرِكُونَ (121) أَوَ مَن كَانَ مَيۡتٗا فَأَحۡيَيۡنَٰهُ وَجَعَلۡنَا لَهُۥ نُورٗا يَمۡشِي بِهِۦ فِي ٱلنَّاسِ كَمَن مَّثَلُهُۥ فِي ٱلظُّلُمَٰتِ لَيۡسَ بِخَارِجٖ مِّنۡهَاۚ كَذَٰلِكَ زُيِّنَ لِلۡكَٰفِرِينَ مَا كَانُواْ يَعۡمَلُونَ (122) وَكَذَٰلِكَ جَعَلۡنَا فِي كُلِّ قَرۡيَةٍ أَكَٰبِرَ مُجۡرِمِيهَا لِيَمۡكُرُواْ فِيهَاۖ وَمَا يَمۡكُرُونَ إِلَّا بِأَنفُسِهِمۡ وَمَا يَشۡعُرُونَ (123) وَإِذَا جَآءَتۡهُمۡ ءَايَةٞ قَالُواْ لَن نُّؤۡمِنَ حَتَّىٰ نُؤۡتَىٰ مِثۡلَ مَآ أُوتِيَ رُسُلُ ٱللَّهِۘ ٱللَّهُ أَعۡلَمُ حَيۡثُ يَجۡعَلُ رِسَالَتَهُۥۗ سَيُصِيبُ ٱلَّذِينَ أَجۡرَمُواْ صَغَارٌ عِندَ ٱللَّهِ وَعَذَابٞ شَدِيدُۢ بِمَا كَانُواْ يَمۡكُرُونَ (124) فَمَن يُرِدِ ٱللَّهُ أَن يَهۡدِيَهُۥ يَشۡرَحۡ صَدۡرَهُۥ لِلۡإِسۡلَٰمِۖ وَمَن يُرِدۡ أَن يُضِلَّهُۥ يَجۡعَلۡ صَدۡرَهُۥ ضَيِّقًا حَرَجٗا كَأَنَّمَا يَصَّعَّدُ فِي ٱلسَّمَآءِۚ كَذَٰلِكَ يَجۡعَلُ ٱللَّهُ ٱلرِّجۡسَ عَلَى ٱلَّذِينَ لَا يُؤۡمِنُونَ (125) وَهَٰذَا صِرَٰطُ رَبِّكَ مُسۡتَقِيمٗاۗ قَدۡ فَصَّلۡنَا ٱلۡأٓيَٰتِ لِقَوۡمٖ يَذَّكَّرُونَ (126) ۞لَهُمۡ دَارُ ٱلسَّلَٰمِ عِندَ رَبِّهِمۡۖ وَهُوَ وَلِيُّهُم بِمَا كَانُواْ يَعۡمَلُونَ (127) وَيَوۡمَ يَحۡشُرُهُمۡ جَمِيعٗا يَٰمَعۡشَرَ ٱلۡجِنِّ قَدِ ٱسۡتَكۡثَرۡتُم مِّنَ ٱلۡإِنسِۖ وَقَالَ أَوۡلِيَآؤُهُم مِّنَ ٱلۡإِنسِ رَبَّنَا ٱسۡتَمۡتَعَ بَعۡضُنَا بِبَعۡضٖ وَبَلَغۡنَآ أَجَلَنَا ٱلَّذِيٓ أَجَّلۡتَ لَنَاۚ قَالَ ٱلنَّارُ مَثۡوَىٰكُمۡ خَٰلِدِينَ فِيهَآ إِلَّا مَا شَآءَ ٱللَّهُۗ إِنَّ رَبَّكَ حَكِيمٌ عَلِيمٞ (128) وَكَذَٰلِكَ نُوَلِّي بَعۡضَ ٱلظَّٰلِمِينَ بَعۡضَۢا بِمَا كَانُواْ يَكۡسِبُونَ (129) يَٰمَعۡشَرَ ٱلۡجِنِّ وَٱلۡإِنسِ أَلَمۡ يَأۡتِكُمۡ رُسُلٞ مِّنكُمۡ يَقُصُّونَ عَلَيۡكُمۡ ءَايَٰتِي وَيُنذِرُونَكُمۡ لِقَآءَ يَوۡمِكُمۡ هَٰذَاۚ قَالُواْ شَهِدۡنَا عَلَىٰٓ أَنفُسِنَاۖ وَغَرَّتۡهُمُ ٱلۡحَيَوٰةُ ٱلدُّنۡيَا وَشَهِدُواْ عَلَىٰٓ أَنفُسِهِمۡ أَنَّهُمۡ كَانُواْ كَٰفِرِينَ (130) ذَٰلِكَ أَن لَّمۡ يَكُن رَّبُّكَ مُهۡلِكَ ٱلۡقُرَىٰ بِظُلۡمٖ وَأَهۡلُهَا غَٰفِلُونَ (131) وَلِكُلّٖ دَرَجَٰتٞ مِّمَّا عَمِلُواْۚ وَمَا رَبُّكَ بِغَٰفِلٍ عَمَّا يَعۡمَلُونَ (132) وَرَبُّكَ ٱلۡغَنِيُّ ذُو ٱلرَّحۡمَةِۚ إِن يَشَأۡ يُذۡهِبۡكُمۡ وَيَسۡتَخۡلِفۡ مِنۢ بَعۡدِكُم مَّا يَشَآءُ كَمَآ أَنشَأَكُم مِّن ذُرِّيَّةِ قَوۡمٍ ءَاخَرِينَ (133) إِنَّ مَا تُوعَدُونَ لَأٓتٖۖ وَمَآ أَنتُم بِمُعۡجِزِينَ (134) قُلۡ يَٰقَوۡمِ ٱعۡمَلُواْ عَلَىٰ مَكَانَتِكُمۡ إِنِّي عَامِلٞۖ فَسَوۡفَ تَعۡلَمُونَ مَن تَكُونُ لَهُۥ عَٰقِبَةُ ٱلدَّارِۚ إِنَّهُۥ لَا يُفۡلِحُ ٱلظَّٰلِمُونَ (135) وَجَعَلُواْ لِلَّهِ مِمَّا ذَرَأَ مِنَ ٱلۡحَرۡثِ وَٱلۡأَنۡعَٰمِ نَصِيبٗا فَقَالُواْ هَٰذَا لِلَّهِ بِزَعۡمِهِمۡ وَهَٰذَا لِشُرَكَآئِنَاۖ فَمَا كَانَ لِشُرَكَآئِهِمۡ فَلَا يَصِلُ إِلَى ٱللَّهِۖ وَمَا كَانَ لِلَّهِ فَهُوَ يَصِلُ إِلَىٰ شُرَكَآئِهِمۡۗ سَآءَ مَا يَحۡكُمُونَ (136) وَكَذَٰلِكَ زَيَّنَ لِكَثِيرٖ مِّنَ ٱلۡمُشۡرِكِينَ قَتۡلَ أَوۡلَٰدِهِمۡ شُرَكَآؤُهُمۡ لِيُرۡدُوهُمۡ وَلِيَلۡبِسُواْ عَلَيۡهِمۡ دِينَهُمۡۖ وَلَوۡ شَآءَ ٱللَّهُ مَا فَعَلُوهُۖ فَذَرۡهُمۡ وَمَا يَفۡتَرُونَ (137) وَقَالُواْ هَٰذِهِۦٓ أَنۡعَٰمٞ وَحَرۡثٌ حِجۡرٞ لَّا يَطۡعَمُهَآ إِلَّا مَن نَّشَآءُ بِزَعۡمِهِمۡ وَأَنۡعَٰمٌ حُرِّمَتۡ ظُهُورُهَا وَأَنۡعَٰمٞ لَّا يَذۡكُرُونَ ٱسۡمَ ٱللَّهِ عَلَيۡهَا ٱفۡتِرَآءً عَلَيۡهِۚ سَيَجۡزِيهِم بِمَا كَانُواْ يَفۡتَرُونَ (138) وَقَالُواْ مَا فِي بُطُونِ هَٰذِهِ ٱلۡأَنۡعَٰمِ خَالِصَةٞ لِّذُكُورِنَا وَمُحَرَّمٌ عَلَىٰٓ أَزۡوَٰجِنَاۖ وَإِن يَكُن مَّيۡتَةٗ فَهُمۡ فِيهِ شُرَكَآءُۚ سَيَجۡزِيهِمۡ وَصۡفَهُمۡۚ إِنَّهُۥ حَكِيمٌ عَلِيمٞ (139) قَدۡ خَسِرَ ٱلَّذِينَ قَتَلُوٓاْ أَوۡلَٰدَهُمۡ سَفَهَۢا بِغَيۡرِ عِلۡمٖ وَحَرَّمُواْ مَا رَزَقَهُمُ ٱللَّهُ ٱفۡتِرَآءً عَلَى ٱللَّهِۚ قَدۡ ضَلُّواْ وَمَا كَانُواْ مُهۡتَدِينَ (140) ۞وَهُوَ ٱلَّذِيٓ أَنشَأَ جَنَّٰتٖ مَّعۡرُوشَٰتٖ وَغَيۡرَ مَعۡرُوشَٰتٖ وَٱلنَّخۡلَ وَٱلزَّرۡعَ مُخۡتَلِفًا أُكُلُهُۥ وَٱلزَّيۡتُونَ وَٱلرُّمَّانَ مُتَشَٰبِهٗا وَغَيۡرَ مُتَشَٰبِهٖۚ كُلُواْ مِن ثَمَرِهِۦٓ إِذَآ أَثۡمَرَ وَءَاتُواْ حَقَّهُۥ يَوۡمَ حَصَادِهِۦۖ وَلَا تُسۡرِفُوٓاْۚ إِنَّهُۥ لَا يُحِبُّ ٱلۡمُسۡرِفِينَ (141) وَمِنَ ٱلۡأَنۡعَٰمِ حَمُولَةٗ وَفَرۡشٗاۚ كُلُواْ مِمَّا رَزَقَكُمُ ٱللَّهُ وَلَا تَتَّبِعُواْ خُطُوَٰتِ ٱلشَّيۡطَٰنِۚ إِنَّهُۥ لَكُمۡ عَدُوّٞ مُّبِينٞ (142) ثَمَٰنِيَةَ أَزۡوَٰجٖۖ مِّنَ ٱلضَّأۡنِ ٱثۡنَيۡنِ وَمِنَ ٱلۡمَعۡزِ ٱثۡنَيۡنِۗ قُلۡ ءَآلذَّكَرَيۡنِ حَرَّمَ أَمِ ٱلۡأُنثَيَيۡنِ أَمَّا ٱشۡتَمَلَتۡ عَلَيۡهِ أَرۡحَامُ ٱلۡأُنثَيَيۡنِۖ نَبِّـُٔونِي بِعِلۡمٍ إِن كُنتُمۡ صَٰدِقِينَ (143) وَمِنَ ٱلۡإِبِلِ ٱثۡنَيۡنِ وَمِنَ ٱلۡبَقَرِ ٱثۡنَيۡنِۗ قُلۡ ءَآلذَّكَرَيۡنِ حَرَّمَ أَمِ ٱلۡأُنثَيَيۡنِ أَمَّا ٱشۡتَمَلَتۡ عَلَيۡهِ أَرۡحَامُ ٱلۡأُنثَيَيۡنِۖ أَمۡ كُنتُمۡ شُهَدَآءَ إِذۡ وَصَّىٰكُمُ ٱللَّهُ بِهَٰذَاۚ فَمَنۡ أَظۡلَمُ مِمَّنِ ٱفۡتَرَىٰ عَلَى ٱللَّهِ كَذِبٗا لِّيُضِلَّ ٱلنَّاسَ بِغَيۡرِ عِلۡمٍۚ إِنَّ ٱللَّهَ لَا يَهۡدِي ٱلۡقَوۡمَ ٱلظَّٰلِمِينَ (144) قُل لَّآ أَجِدُ فِي مَآ أُوحِيَ إِلَيَّ مُحَرَّمًا عَلَىٰ طَاعِمٖ يَطۡعَمُهُۥٓ إِلَّآ أَن يَكُونَ مَيۡتَةً أَوۡ دَمٗا مَّسۡفُوحًا أَوۡ لَحۡمَ خِنزِيرٖ فَإِنَّهُۥ رِجۡسٌ أَوۡ فِسۡقًا أُهِلَّ لِغَيۡرِ ٱللَّهِ بِهِۦۚ فَمَنِ ٱضۡطُرَّ غَيۡرَ بَاغٖ وَلَا عَادٖ فَإِنَّ رَبَّكَ غَفُورٞ رَّحِيمٞ (145) وَعَلَى ٱلَّذِينَ هَادُواْ حَرَّمۡنَا كُلَّ ذِي ظُفُرٖۖ وَمِنَ ٱلۡبَقَرِ وَٱلۡغَنَمِ حَرَّمۡنَا عَلَيۡهِمۡ شُحُومَهُمَآ إِلَّا مَا حَمَلَتۡ ظُهُورُهُمَآ أَوِ ٱلۡحَوَايَآ أَوۡ مَا ٱخۡتَلَطَ بِعَظۡمٖۚ ذَٰلِكَ جَزَيۡنَٰهُم بِبَغۡيِهِمۡۖ وَإِنَّا لَصَٰدِقُونَ (146) فَإِن كَذَّبُوكَ فَقُل رَّبُّكُمۡ ذُو رَحۡمَةٖ وَٰسِعَةٖ وَلَا يُرَدُّ بَأۡسُهُۥ عَنِ ٱلۡقَوۡمِ ٱلۡمُجۡرِمِينَ (147) سَيَقُولُ ٱلَّذِينَ أَشۡرَكُواْ لَوۡ شَآءَ ٱللَّهُ مَآ أَشۡرَكۡنَا وَلَآ ءَابَآؤُنَا وَلَا حَرَّمۡنَا مِن شَيۡءٖۚ كَذَٰلِكَ كَذَّبَ ٱلَّذِينَ مِن قَبۡلِهِمۡ حَتَّىٰ ذَاقُواْ بَأۡسَنَاۗ قُلۡ هَلۡ عِندَكُم مِّنۡ عِلۡمٖ فَتُخۡرِجُوهُ لَنَآۖ إِن تَتَّبِعُونَ إِلَّا ٱلظَّنَّ وَإِنۡ أَنتُمۡ إِلَّا تَخۡرُصُونَ (148) قُلۡ فَلِلَّهِ ٱلۡحُجَّةُ ٱلۡبَٰلِغَةُۖ فَلَوۡ شَآءَ لَهَدَىٰكُمۡ أَجۡمَعِينَ (149) قُلۡ هَلُمَّ شُهَدَآءَكُمُ ٱلَّذِينَ يَشۡهَدُونَ أَنَّ ٱللَّهَ حَرَّمَ هَٰذَاۖ فَإِن شَهِدُواْ فَلَا تَشۡهَدۡ مَعَهُمۡۚ وَلَا تَتَّبِعۡ أَهۡوَآءَ ٱلَّذِينَ كَذَّبُواْ بِـَٔايَٰتِنَا وَٱلَّذِينَ لَا يُؤۡمِنُونَ بِٱلۡأٓخِرَةِ وَهُم بِرَبِّهِمۡ يَعۡدِلُونَ (150) ۞قُلۡ تَعَالَوۡاْ أَتۡلُ مَا حَرَّمَ رَبُّكُمۡ عَلَيۡكُمۡۖ أَلَّا تُشۡرِكُواْ بِهِۦ شَيۡـٔٗاۖ وَبِٱلۡوَٰلِدَيۡنِ إِحۡسَٰنٗاۖ وَلَا تَقۡتُلُوٓاْ أَوۡلَٰدَكُم مِّنۡ إِمۡلَٰقٖ نَّحۡنُ نَرۡزُقُكُمۡ وَإِيَّاهُمۡۖ وَلَا تَقۡرَبُواْ ٱلۡفَوَٰحِشَ مَا ظَهَرَ مِنۡهَا وَمَا بَطَنَۖ وَلَا تَقۡتُلُواْ ٱلنَّفۡسَ ٱلَّتِي حَرَّمَ ٱللَّهُ إِلَّا بِٱلۡحَقِّۚ ذَٰلِكُمۡ وَصَّىٰكُم بِهِۦ لَعَلَّكُمۡ تَعۡقِلُونَ (151) وَلَا تَقۡرَبُواْ مَالَ ٱلۡيَتِيمِ إِلَّا بِٱلَّتِي هِيَ أَحۡسَنُ حَتَّىٰ يَبۡلُغَ أَشُدَّهُۥۚ وَأَوۡفُواْ ٱلۡكَيۡلَ وَٱلۡمِيزَانَ بِٱلۡقِسۡطِۖ لَا نُكَلِّفُ نَفۡسًا إِلَّا وُسۡعَهَاۖ وَإِذَا قُلۡتُمۡ فَٱعۡدِلُواْ وَلَوۡ كَانَ ذَا قُرۡبَىٰۖ وَبِعَهۡدِ ٱللَّهِ أَوۡفُواْۚ ذَٰلِكُمۡ وَصَّىٰكُم بِهِۦ لَعَلَّكُمۡ تَذَكَّرُونَ (152) وَأَنَّ هَٰذَا صِرَٰطِي مُسۡتَقِيمٗا فَٱتَّبِعُوهُۖ وَلَا تَتَّبِعُواْ ٱلسُّبُلَ فَتَفَرَّقَ بِكُمۡ عَن سَبِيلِهِۦۚ ذَٰلِكُمۡ وَصَّىٰكُم بِهِۦ لَعَلَّكُمۡ تَتَّقُونَ (153) ثُمَّ ءَاتَيۡنَا مُوسَى ٱلۡكِتَٰبَ تَمَامًا عَلَى ٱلَّذِيٓ أَحۡسَنَ وَتَفۡصِيلٗا لِّكُلِّ شَيۡءٖ وَهُدٗى وَرَحۡمَةٗ لَّعَلَّهُم بِلِقَآءِ رَبِّهِمۡ يُؤۡمِنُونَ (154) وَهَٰذَا كِتَٰبٌ أَنزَلۡنَٰهُ مُبَارَكٞ فَٱتَّبِعُوهُ وَٱتَّقُواْ لَعَلَّكُمۡ تُرۡحَمُونَ (155) أَن تَقُولُوٓاْ إِنَّمَآ أُنزِلَ ٱلۡكِتَٰبُ عَلَىٰ طَآئِفَتَيۡنِ مِن قَبۡلِنَا وَإِن كُنَّا عَن دِرَاسَتِهِمۡ لَغَٰفِلِينَ (156) أَوۡ تَقُولُواْ لَوۡ أَنَّآ أُنزِلَ عَلَيۡنَا ٱلۡكِتَٰبُ لَكُنَّآ أَهۡدَىٰ مِنۡهُمۡۚ فَقَدۡ جَآءَكُم بَيِّنَةٞ مِّن رَّبِّكُمۡ وَهُدٗى وَرَحۡمَةٞۚ فَمَنۡ أَظۡلَمُ مِمَّن كَذَّبَ بِـَٔايَٰتِ ٱللَّهِ وَصَدَفَ عَنۡهَاۗ سَنَجۡزِي ٱلَّذِينَ يَصۡدِفُونَ عَنۡ ءَايَٰتِنَا سُوٓءَ ٱلۡعَذَابِ بِمَا كَانُواْ يَصۡدِفُونَ (157) هَلۡ يَنظُرُونَ إِلَّآ أَن تَأۡتِيَهُمُ ٱلۡمَلَٰٓئِكَةُ أَوۡ يَأۡتِيَ رَبُّكَ أَوۡ يَأۡتِيَ بَعۡضُ ءَايَٰتِ رَبِّكَۗ يَوۡمَ يَأۡتِي بَعۡضُ ءَايَٰتِ رَبِّكَ لَا يَنفَعُ نَفۡسًا إِيمَٰنُهَا لَمۡ تَكُنۡ ءَامَنَتۡ مِن قَبۡلُ أَوۡ كَسَبَتۡ فِيٓ إِيمَٰنِهَا خَيۡرٗاۗ قُلِ ٱنتَظِرُوٓاْ إِنَّا مُنتَظِرُونَ (158) إِنَّ ٱلَّذِينَ فَرَّقُواْ دِينَهُمۡ وَكَانُواْ شِيَعٗا لَّسۡتَ مِنۡهُمۡ فِي شَيۡءٍۚ إِنَّمَآ أَمۡرُهُمۡ إِلَى ٱللَّهِ ثُمَّ يُنَبِّئُهُم بِمَا كَانُواْ يَفۡعَلُونَ (159) مَن جَآءَ بِٱلۡحَسَنَةِ فَلَهُۥ عَشۡرُ أَمۡثَالِهَاۖ وَمَن جَآءَ بِٱلسَّيِّئَةِ فَلَا يُجۡزَىٰٓ إِلَّا مِثۡلَهَا وَهُمۡ لَا يُظۡلَمُونَ (160) قُلۡ إِنَّنِي هَدَىٰنِي رَبِّيٓ إِلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ دِينٗا قِيَمٗا مِّلَّةَ إِبۡرَٰهِيمَ حَنِيفٗاۚ وَمَا كَانَ مِنَ ٱلۡمُشۡرِكِينَ (161) قُلۡ إِنَّ صَلَاتِي وَنُسُكِي وَمَحۡيَايَ وَمَمَاتِي لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ (162) لَا شَرِيكَ لَهُۥۖ وَبِذَٰلِكَ أُمِرۡتُ وَأَنَا۠ أَوَّلُ ٱلۡمُسۡلِمِينَ (163) قُلۡ أَغَيۡرَ ٱللَّهِ أَبۡغِي رَبّٗا وَهُوَ رَبُّ كُلِّ شَيۡءٖۚ وَلَا تَكۡسِبُ كُلُّ نَفۡسٍ إِلَّا عَلَيۡهَاۚ وَلَا تَزِرُ وَازِرَةٞ وِزۡرَ أُخۡرَىٰۚ ثُمَّ إِلَىٰ رَبِّكُم مَّرۡجِعُكُمۡ فَيُنَبِّئُكُم بِمَا كُنتُمۡ فِيهِ تَخۡتَلِفُونَ (164) وَهُوَ ٱلَّذِي جَعَلَكُمۡ خَلَٰٓئِفَ ٱلۡأَرۡضِ وَرَفَعَ بَعۡضَكُمۡ فَوۡقَ بَعۡضٖ دَرَجَٰتٖ لِّيَبۡلُوَكُمۡ فِي مَآ ءَاتَىٰكُمۡۗ إِنَّ رَبَّكَ سَرِيعُ ٱلۡعِقَابِ وَإِنَّهُۥ لَغَفُورٞ رَّحِيمُۢ (165)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default Six;