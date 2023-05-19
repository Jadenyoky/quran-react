import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const Seventeen = () => {
  return (
    <div>
      <Helmet>
        <title>017 - سورة الإسراء</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الإسراء</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          سُبۡحَٰنَ ٱلَّذِيٓ أَسۡرَىٰ بِعَبۡدِهِۦ لَيۡلٗا مِّنَ ٱلۡمَسۡجِدِ
          ٱلۡحَرَامِ إِلَى ٱلۡمَسۡجِدِ ٱلۡأَقۡصَا ٱلَّذِي بَٰرَكۡنَا حَوۡلَهُۥ
          لِنُرِيَهُۥ مِنۡ ءَايَٰتِنَآۚ إِنَّهُۥ هُوَ ٱلسَّمِيعُ ٱلۡبَصِيرُ
          <span className="numberTheme"> (1) </span>
          وَءَاتَيۡنَا مُوسَى ٱلۡكِتَٰبَ وَجَعَلۡنَٰهُ هُدٗى لِّبَنِيٓ
          إِسۡرَٰٓءِيلَ أَلَّا تَتَّخِذُواْ مِن دُونِي وَكِيلٗا
          <span className="numberTheme"> (2) </span> ذُرِّيَّةَ مَنۡ حَمَلۡنَا
          مَعَ نُوحٍۚ إِنَّهُۥ كَانَ عَبۡدٗا شَكُورٗا
          <span className="numberTheme"> (3) </span>
          وَقَضَيۡنَآ إِلَىٰ بَنِيٓ إِسۡرَٰٓءِيلَ فِي ٱلۡكِتَٰبِ لَتُفۡسِدُنَّ
          فِي ٱلۡأَرۡضِ مَرَّتَيۡنِ وَلَتَعۡلُنَّ عُلُوّٗا كَبِيرٗا
          <span className="numberTheme"> (4) </span> فَإِذَا جَآءَ وَعۡدُ
          أُولَىٰهُمَا بَعَثۡنَا عَلَيۡكُمۡ عِبَادٗا لَّنَآ أُوْلِي بَأۡسٖ
          شَدِيدٖ فَجَاسُواْ خِلَٰلَ ٱلدِّيَارِۚ وَكَانَ وَعۡدٗا مَّفۡعُولٗا
          <span className="numberTheme"> (5) </span> ثُمَّ رَدَدۡنَا لَكُمُ
          ٱلۡكَرَّةَ عَلَيۡهِمۡ وَأَمۡدَدۡنَٰكُم بِأَمۡوَٰلٖ وَبَنِينَ
          وَجَعَلۡنَٰكُمۡ أَكۡثَرَ نَفِيرًا
          <span className="numberTheme"> (6) </span> إِنۡ أَحۡسَنتُمۡ
          أَحۡسَنتُمۡ لِأَنفُسِكُمۡۖ وَإِنۡ أَسَأۡتُمۡ فَلَهَاۚ فَإِذَا جَآءَ
          وَعۡدُ ٱلۡأٓخِرَةِ لِيَسُـُٔواْ وُجُوهَكُمۡ وَلِيَدۡخُلُواْ
          ٱلۡمَسۡجِدَ كَمَا دَخَلُوهُ أَوَّلَ مَرَّةٖ وَلِيُتَبِّرُواْ مَا
          عَلَوۡاْ تَتۡبِيرًا
          <span className="numberTheme"> (7) </span> عَسَىٰ رَبُّكُمۡ أَن
          يَرۡحَمَكُمۡۚ وَإِنۡ عُدتُّمۡ عُدۡنَاۚ وَجَعَلۡنَا جَهَنَّمَ
          لِلۡكَٰفِرِينَ حَصِيرًا
          <span className="numberTheme"> (8) </span> إِنَّ هَٰذَا ٱلۡقُرۡءَانَ
          يَهۡدِي لِلَّتِي هِيَ أَقۡوَمُ وَيُبَشِّرُ ٱلۡمُؤۡمِنِينَ ٱلَّذِينَ
          يَعۡمَلُونَ ٱلصَّٰلِحَٰتِ أَنَّ لَهُمۡ أَجۡرٗا كَبِيرٗا
          <span className="numberTheme"> (9) </span> وَأَنَّ ٱلَّذِينَ لَا
          يُؤۡمِنُونَ بِٱلۡأٓخِرَةِ أَعۡتَدۡنَا لَهُمۡ عَذَابًا أَلِيمٗا
          <span className="numberTheme"> (10) </span>
          وَيَدۡعُ ٱلۡإِنسَٰنُ بِٱلشَّرِّ دُعَآءَهُۥ بِٱلۡخَيۡرِۖ وَكَانَ
          ٱلۡإِنسَٰنُ عَجُولٗا
          <span className="numberTheme"> (11) </span> وَجَعَلۡنَا ٱلَّيۡلَ
          وَٱلنَّهَارَ ءَايَتَيۡنِۖ فَمَحَوۡنَآ ءَايَةَ ٱلَّيۡلِ وَجَعَلۡنَآ
          ءَايَةَ ٱلنَّهَارِ مُبۡصِرَةٗ لِّتَبۡتَغُواْ فَضۡلٗا مِّن رَّبِّكُمۡ
          وَلِتَعۡلَمُواْ عَدَدَ ٱلسِّنِينَ وَٱلۡحِسَابَۚ وَكُلَّ شَيۡءٖ
          فَصَّلۡنَٰهُ تَفۡصِيلٗا
          <span className="numberTheme"> (12) </span> وَكُلَّ إِنسَٰنٍ
          أَلۡزَمۡنَٰهُ طَٰٓئِرَهُۥ فِي عُنُقِهِۦۖ وَنُخۡرِجُ لَهُۥ يَوۡمَ
          ٱلۡقِيَٰمَةِ كِتَٰبٗا يَلۡقَىٰهُ مَنشُورًا
          <span className="numberTheme"> (13) </span> ٱقۡرَأۡ كِتَٰبَكَ كَفَىٰ
          بِنَفۡسِكَ ٱلۡيَوۡمَ عَلَيۡكَ حَسِيبٗا
          <span className="numberTheme"> (14) </span> مَّنِ ٱهۡتَدَىٰ فَإِنَّمَا
          يَهۡتَدِي لِنَفۡسِهِۦۖ وَمَن ضَلَّ فَإِنَّمَا يَضِلُّ عَلَيۡهَاۚ وَلَا
          تَزِرُ وَازِرَةٞ وِزۡرَ أُخۡرَىٰۗ وَمَا كُنَّا مُعَذِّبِينَ حَتَّىٰ
          نَبۡعَثَ رَسُولٗا
          <span className="numberTheme"> (15) </span> وَإِذَآ أَرَدۡنَآ أَن
          نُّهۡلِكَ قَرۡيَةً أَمَرۡنَا مُتۡرَفِيهَا فَفَسَقُواْ فِيهَا فَحَقَّ
          عَلَيۡهَا ٱلۡقَوۡلُ فَدَمَّرۡنَٰهَا تَدۡمِيرٗا
          <span className="numberTheme"> (16) </span> وَكَمۡ أَهۡلَكۡنَا مِنَ
          ٱلۡقُرُونِ مِنۢ بَعۡدِ نُوحٖۗ وَكَفَىٰ بِرَبِّكَ بِذُنُوبِ عِبَادِهِۦ
          خَبِيرَۢا بَصِيرٗا
          <span className="numberTheme"> (17) </span> مَّن كَانَ يُرِيدُ
          ٱلۡعَاجِلَةَ عَجَّلۡنَا لَهُۥ فِيهَا مَا نَشَآءُ لِمَن نُّرِيدُ ثُمَّ
          جَعَلۡنَا لَهُۥ جَهَنَّمَ يَصۡلَىٰهَا مَذۡمُومٗا مَّدۡحُورٗا
          <span className="numberTheme"> (18) </span> وَمَنۡ أَرَادَ ٱلۡأٓخِرَةَ
          وَسَعَىٰ لَهَا سَعۡيَهَا وَهُوَ مُؤۡمِنٞ فَأُوْلَٰٓئِكَ كَانَ
          سَعۡيُهُم مَّشۡكُورٗا
          <span className="numberTheme"> (19) </span> كُلّٗا نُّمِدُّ
          هَٰٓؤُلَآءِ وَهَٰٓؤُلَآءِ مِنۡ عَطَآءِ رَبِّكَۚ وَمَا كَانَ
          عَطَآءُ رَبِّكَ مَحۡظُورًا
          <span className="numberTheme"> (20) </span>
          ٱنظُرۡ كَيۡفَ فَضَّلۡنَا بَعۡضَهُمۡ عَلَىٰ بَعۡضٖۚ وَلَلۡأٓخِرَةُ
          أَكۡبَرُ دَرَجَٰتٖ وَأَكۡبَرُ تَفۡضِيلٗا
          <span className="numberTheme"> (21) </span> لَّا تَجۡعَلۡ مَعَ ٱللَّهِ
          إِلَٰهًا ءَاخَرَ فَتَقۡعُدَ مَذۡمُومٗا مَّخۡذُولٗا
          <span className="numberTheme"> (22) </span>
          <span className="partTheme"> ۞ </span>وَقَضَىٰ رَبُّكَ أَلَّا
          تَعۡبُدُوٓاْ إِلَّآ إِيَّاهُ وَبِٱلۡوَٰلِدَيۡنِ إِحۡسَٰنًاۚ إِمَّا
          يَبۡلُغَنَّ عِندَكَ ٱلۡكِبَرَ أَحَدُهُمَآ أَوۡ كِلَاهُمَا فَلَا تَقُل
          لَّهُمَآ أُفّٖ وَلَا تَنۡهَرۡهُمَا وَقُل لَّهُمَا قَوۡلٗا كَرِيمٗا
          <span className="numberTheme"> (23) </span> وَٱخۡفِضۡ لَهُمَا جَنَاحَ
          ٱلذُّلِّ مِنَ ٱلرَّحۡمَةِ وَقُل رَّبِّ ٱرۡحَمۡهُمَا كَمَا رَبَّيَانِي
          صَغِيرٗا
          <span className="numberTheme"> (24) </span> رَّبُّكُمۡ أَعۡلَمُ بِمَا
          فِي نُفُوسِكُمۡۚ إِن تَكُونُواْ صَٰلِحِينَ فَإِنَّهُۥ كَانَ
          لِلۡأَوَّٰبِينَ غَفُورٗا
          <span className="numberTheme"> (25) </span> وَءَاتِ ذَا ٱلۡقُرۡبَىٰ
          حَقَّهُۥ وَٱلۡمِسۡكِينَ وَٱبۡنَ ٱلسَّبِيلِ وَلَا تُبَذِّرۡ تَبۡذِيرًا
          <span className="numberTheme"> (26) </span> إِنَّ ٱلۡمُبَذِّرِينَ
          كَانُوٓاْ إِخۡوَٰنَ ٱلشَّيَٰطِينِۖ وَكَانَ ٱلشَّيۡطَٰنُ لِرَبِّهِۦ
          كَفُورٗا
          <span className="numberTheme"> (27) </span> وَإِمَّا تُعۡرِضَنَّ
          عَنۡهُمُ ٱبۡتِغَآءَ رَحۡمَةٖ مِّن رَّبِّكَ تَرۡجُوهَا فَقُل لَّهُمۡ
          قَوۡلٗا مَّيۡسُورٗا
          <span className="numberTheme"> (28) </span> وَلَا تَجۡعَلۡ يَدَكَ
          مَغۡلُولَةً إِلَىٰ عُنُقِكَ وَلَا تَبۡسُطۡهَا كُلَّ ٱلۡبَسۡطِ
          فَتَقۡعُدَ مَلُومٗا مَّحۡسُورًا
          <span className="numberTheme"> (29) </span> إِنَّ رَبَّكَ يَبۡسُطُ
          ٱلرِّزۡقَ لِمَن يَشَآءُ وَيَقۡدِرُۚ إِنَّهُۥ كَانَ بِعِبَادِهِۦ
          خَبِيرَۢا بَصِيرٗا
          <span className="numberTheme"> (30) </span> وَلَا تَقۡتُلُوٓاْ
          أَوۡلَٰدَكُمۡ خَشۡيَةَ إِمۡلَٰقٖۖ نَّحۡنُ نَرۡزُقُهُمۡ وَإِيَّاكُمۡۚ
          إِنَّ قَتۡلَهُمۡ كَانَ خِطۡـٔٗا كَبِيرٗا
          <span className="numberTheme"> (31) </span> وَلَا تَقۡرَبُواْ
          ٱلزِّنَىٰٓۖ إِنَّهُۥ كَانَ فَٰحِشَةٗ وَسَآءَ سَبِيلٗا
          <span className="numberTheme"> (32) </span> وَلَا تَقۡتُلُواْ
          ٱلنَّفۡسَ ٱلَّتِي حَرَّمَ ٱللَّهُ إِلَّا بِٱلۡحَقِّۗ وَمَن قُتِلَ
          مَظۡلُومٗا فَقَدۡ جَعَلۡنَا لِوَلِيِّهِۦ سُلۡطَٰنٗا فَلَا يُسۡرِف فِّي
          ٱلۡقَتۡلِۖ إِنَّهُۥ كَانَ مَنصُورٗا
          <span className="numberTheme"> (33) </span> وَلَا تَقۡرَبُواْ مَالَ
          ٱلۡيَتِيمِ إِلَّا بِٱلَّتِي هِيَ أَحۡسَنُ حَتَّىٰ يَبۡلُغَ أَشُدَّهُۥۚ
          وَأَوۡفُواْ بِٱلۡعَهۡدِۖ إِنَّ ٱلۡعَهۡدَ كَانَ مَسۡـُٔولٗا
          <span className="numberTheme"> (34) </span>
          وَأَوۡفُواْ ٱلۡكَيۡلَ إِذَا كِلۡتُمۡ وَزِنُواْ بِٱلۡقِسۡطَاسِ
          ٱلۡمُسۡتَقِيمِۚ ذَٰلِكَ خَيۡرٞ وَأَحۡسَنُ تَأۡوِيلٗا
          <span className="numberTheme"> (35) </span> وَلَا تَقۡفُ مَا لَيۡسَ
          لَكَ بِهِۦ عِلۡمٌۚ إِنَّ ٱلسَّمۡعَ وَٱلۡبَصَرَ وَٱلۡفُؤَادَ كُلُّ
          أُوْلَٰٓئِكَ كَانَ عَنۡهُ مَسۡـُٔولٗا
          <span className="numberTheme"> (36) </span> وَلَا تَمۡشِ فِي ٱلۡأَرۡضِ
          مَرَحًاۖ إِنَّكَ لَن تَخۡرِقَ ٱلۡأَرۡضَ وَلَن تَبۡلُغَ ٱلۡجِبَالَ
          طُولٗا
          <span className="numberTheme"> (37) </span> كُلُّ ذَٰلِكَ كَانَ
          سَيِّئُهُۥ عِندَ رَبِّكَ مَكۡرُوهٗا
          <span className="numberTheme"> (38) </span> ذَٰلِكَ مِمَّآ أَوۡحَىٰٓ
          إِلَيۡكَ رَبُّكَ مِنَ ٱلۡحِكۡمَةِۗ وَلَا تَجۡعَلۡ مَعَ ٱللَّهِ
          إِلَٰهًا ءَاخَرَ فَتُلۡقَىٰ فِي جَهَنَّمَ مَلُومٗا مَّدۡحُورًا
          <span className="numberTheme"> (39) </span> أَفَأَصۡفَىٰكُمۡ رَبُّكُم
          بِٱلۡبَنِينَ وَٱتَّخَذَ مِنَ ٱلۡمَلَٰٓئِكَةِ إِنَٰثًاۚ إِنَّكُمۡ
          لَتَقُولُونَ قَوۡلًا عَظِيمٗا
          <span className="numberTheme"> (40) </span> وَلَقَدۡ صَرَّفۡنَا فِي
          هَٰذَا ٱلۡقُرۡءَانِ لِيَذَّكَّرُواْ وَمَا يَزِيدُهُمۡ إِلَّا نُفُورٗا
          <span className="numberTheme"> (41) </span>
          قُل لَّوۡ كَانَ مَعَهُۥٓ ءَالِهَةٞ كَمَا يَقُولُونَ إِذٗا
          لَّٱبۡتَغَوۡاْ إِلَىٰ ذِي ٱلۡعَرۡشِ سَبِيلٗا
          <span className="numberTheme"> (42) </span> سُبۡحَٰنَهُۥ وَتَعَٰلَىٰ
          عَمَّا يَقُولُونَ عُلُوّٗا كَبِيرٗا
          <span className="numberTheme"> (43) </span> تُسَبِّحُ لَهُ
          ٱلسَّمَٰوَٰتُ ٱلسَّبۡعُ وَٱلۡأَرۡضُ وَمَن فِيهِنَّۚ وَإِن مِّن شَيۡءٍ
          إِلَّا يُسَبِّحُ بِحَمۡدِهِۦ وَلَٰكِن لَّا تَفۡقَهُونَ تَسۡبِيحَهُمۡۚ
          إِنَّهُۥ كَانَ حَلِيمًا غَفُورٗا
          <span className="numberTheme"> (44) </span> وَإِذَا قَرَأۡتَ
          ٱلۡقُرۡءَانَ جَعَلۡنَا بَيۡنَكَ وَبَيۡنَ ٱلَّذِينَ لَا يُؤۡمِنُونَ
          بِٱلۡأٓخِرَةِ حِجَابٗا مَّسۡتُورٗا
          <span className="numberTheme"> (45) </span> وَجَعَلۡنَا عَلَىٰ
          قُلُوبِهِمۡ أَكِنَّةً أَن يَفۡقَهُوهُ وَفِيٓ ءَاذَانِهِمۡ وَقۡرٗاۚ
          وَإِذَا ذَكَرۡتَ رَبَّكَ فِي ٱلۡقُرۡءَانِ وَحۡدَهُۥ وَلَّوۡاْ عَلَىٰٓ
          أَدۡبَٰرِهِمۡ نُفُورٗا
          <span className="numberTheme"> (46) </span>
          نَّحۡنُ أَعۡلَمُ بِمَا يَسۡتَمِعُونَ بِهِۦٓ إِذۡ يَسۡتَمِعُونَ
          إِلَيۡكَ وَإِذۡ هُمۡ نَجۡوَىٰٓ إِذۡ يَقُولُ ٱلظَّٰلِمُونَ إِن
          تَتَّبِعُونَ إِلَّا رَجُلٗا مَّسۡحُورًا
          <span className="numberTheme"> (47) </span> ٱنظُرۡ كَيۡفَ ضَرَبُواْ
          لَكَ ٱلۡأَمۡثَالَ فَضَلُّواْ فَلَا يَسۡتَطِيعُونَ سَبِيلٗا
          <span className="numberTheme"> (48) </span>
          وَقَالُوٓاْ أَءِذَا كُنَّا عِظَٰمٗا وَرُفَٰتًا أَءِنَّا لَمَبۡعُوثُونَ
          خَلۡقٗا جَدِيدٗا
          <span className="numberTheme"> (49) </span>
          <span className="partTheme"> ۞ </span>قُلۡ كُونُواْ حِجَارَةً أَوۡ
          حَدِيدًا
          <span className="numberTheme"> (50) </span> أَوۡ خَلۡقٗا مِّمَّا
          يَكۡبُرُ فِي صُدُورِكُمۡۚ فَسَيَقُولُونَ مَن يُعِيدُنَاۖ قُلِ ٱلَّذِي
          فَطَرَكُمۡ أَوَّلَ مَرَّةٖۚ فَسَيُنۡغِضُونَ إِلَيۡكَ رُءُوسَهُمۡ
          وَيَقُولُونَ مَتَىٰ هُوَۖ قُلۡ عَسَىٰٓ أَن يَكُونَ قَرِيبٗا
          <span className="numberTheme"> (51) </span> يَوۡمَ يَدۡعُوكُمۡ
          فَتَسۡتَجِيبُونَ بِحَمۡدِهِۦ وَتَظُنُّونَ إِن لَّبِثۡتُمۡ إِلَّا
          قَلِيلٗا
          <span className="numberTheme"> (52) </span> وَقُل لِّعِبَادِي
          يَقُولُواْ ٱلَّتِي هِيَ أَحۡسَنُۚ إِنَّ ٱلشَّيۡطَٰنَ يَنزَغُ
          بَيۡنَهُمۡۚ إِنَّ ٱلشَّيۡطَٰنَ كَانَ لِلۡإِنسَٰنِ عَدُوّٗا مُّبِينٗا
          <span className="numberTheme"> (53) </span> رَّبُّكُمۡ أَعۡلَمُ
          بِكُمۡۖ إِن يَشَأۡ يَرۡحَمۡكُمۡ أَوۡ إِن يَشَأۡ يُعَذِّبۡكُمۡۚ وَمَآ
          أَرۡسَلۡنَٰكَ عَلَيۡهِمۡ وَكِيلٗا
          <span className="numberTheme"> (54) </span>
          وَرَبُّكَ أَعۡلَمُ بِمَن فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۗ وَلَقَدۡ
          فَضَّلۡنَا بَعۡضَ ٱلنَّبِيِّـۧنَ عَلَىٰ بَعۡضٖۖ وَءَاتَيۡنَا دَاوُۥدَ
          زَبُورٗا
          <span className="numberTheme"> (55) </span> قُلِ ٱدۡعُواْ ٱلَّذِينَ
          زَعَمۡتُم مِّن دُونِهِۦ فَلَا يَمۡلِكُونَ كَشۡفَ ٱلضُّرِّ عَنكُمۡ
          وَلَا تَحۡوِيلًا
          <span className="numberTheme"> (56) </span> أُوْلَٰٓئِكَ ٱلَّذِينَ
          يَدۡعُونَ يَبۡتَغُونَ إِلَىٰ رَبِّهِمُ ٱلۡوَسِيلَةَ أَيُّهُمۡ أَقۡرَبُ
          وَيَرۡجُونَ رَحۡمَتَهُۥ وَيَخَافُونَ عَذَابَهُۥٓۚ إِنَّ عَذَابَ
          رَبِّكَ كَانَ مَحۡذُورٗا
          <span className="numberTheme"> (57) </span> وَإِن مِّن قَرۡيَةٍ إِلَّا
          نَحۡنُ مُهۡلِكُوهَا قَبۡلَ يَوۡمِ ٱلۡقِيَٰمَةِ أَوۡ مُعَذِّبُوهَا
          عَذَابٗا شَدِيدٗاۚ كَانَ ذَٰلِكَ فِي ٱلۡكِتَٰبِ مَسۡطُورٗا
          <span className="numberTheme"> (58) </span> وَمَا مَنَعَنَآ أَن
          نُّرۡسِلَ بِٱلۡأٓيَٰتِ إِلَّآ أَن كَذَّبَ بِهَا ٱلۡأَوَّلُونَۚ
          وَءَاتَيۡنَا ثَمُودَ ٱلنَّاقَةَ مُبۡصِرَةٗ فَظَلَمُواْ بِهَاۚ وَمَا
          نُرۡسِلُ بِٱلۡأٓيَٰتِ إِلَّا تَخۡوِيفٗا
          <span className="numberTheme"> (59) </span> وَإِذۡ قُلۡنَا لَكَ إِنَّ
          رَبَّكَ أَحَاطَ بِٱلنَّاسِۚ وَمَا جَعَلۡنَا ٱلرُّءۡيَا ٱلَّتِيٓ
          أَرَيۡنَٰكَ إِلَّا فِتۡنَةٗ لِّلنَّاسِ وَٱلشَّجَرَةَ ٱلۡمَلۡعُونَةَ
          فِي ٱلۡقُرۡءَانِۚ وَنُخَوِّفُهُمۡ فَمَا يَزِيدُهُمۡ إِلَّا طُغۡيَٰنٗا
          كَبِيرٗا
          <span className="numberTheme"> (60) </span> وَإِذۡ قُلۡنَا
          لِلۡمَلَٰٓئِكَةِ ٱسۡجُدُواْ لِأٓدَمَ فَسَجَدُوٓاْ إِلَّآ إِبۡلِيسَ
          قَالَ ءَأَسۡجُدُ لِمَنۡ خَلَقۡتَ طِينٗا
          <span className="numberTheme"> (61) </span> قَالَ أَرَءَيۡتَكَ هَٰذَا
          ٱلَّذِي كَرَّمۡتَ عَلَيَّ لَئِنۡ أَخَّرۡتَنِ إِلَىٰ يَوۡمِ
          ٱلۡقِيَٰمَةِ لَأَحۡتَنِكَنَّ ذُرِّيَّتَهُۥٓ إِلَّا قَلِيلٗا
          <span className="numberTheme"> (62) </span> قَالَ ٱذۡهَبۡ فَمَن
          تَبِعَكَ مِنۡهُمۡ فَإِنَّ جَهَنَّمَ جَزَآؤُكُمۡ جَزَآءٗ مَّوۡفُورٗا
          <span className="numberTheme"> (63) </span> وَٱسۡتَفۡزِزۡ مَنِ
          ٱسۡتَطَعۡتَ مِنۡهُم بِصَوۡتِكَ وَأَجۡلِبۡ عَلَيۡهِم بِخَيۡلِكَ
          وَرَجِلِكَ وَشَارِكۡهُمۡ فِي ٱلۡأَمۡوَٰلِ وَٱلۡأَوۡلَٰدِ وَعِدۡهُمۡۚ
          وَمَا يَعِدُهُمُ ٱلشَّيۡطَٰنُ إِلَّا غُرُورًا
          <span className="numberTheme"> (64) </span> إِنَّ عِبَادِي لَيۡسَ لَكَ
          عَلَيۡهِمۡ سُلۡطَٰنٞۚ وَكَفَىٰ بِرَبِّكَ وَكِيلٗا
          <span className="numberTheme"> (65) </span> رَّبُّكُمُ ٱلَّذِي يُزۡجِي
          لَكُمُ ٱلۡفُلۡكَ فِي ٱلۡبَحۡرِ لِتَبۡتَغُواْ مِن فَضۡلِهِۦٓۚ إِنَّهُۥ
          كَانَ بِكُمۡ رَحِيمٗا
          <span className="numberTheme"> (66) </span> وَإِذَا مَسَّكُمُ ٱلضُّرُّ
          فِي ٱلۡبَحۡرِ ضَلَّ مَن تَدۡعُونَ إِلَّآ إِيَّاهُۖ فَلَمَّا
          نَجَّىٰكُمۡ إِلَى ٱلۡبَرِّ أَعۡرَضۡتُمۡۚ وَكَانَ ٱلۡإِنسَٰنُ كَفُورًا
          <span className="numberTheme"> (67) </span> أَفَأَمِنتُمۡ أَن يَخۡسِفَ
          بِكُمۡ جَانِبَ ٱلۡبَرِّ أَوۡ يُرۡسِلَ عَلَيۡكُمۡ حَاصِبٗا ثُمَّ لَا
          تَجِدُواْ لَكُمۡ وَكِيلًا
          <span className="numberTheme"> (68) </span> أَمۡ أَمِنتُمۡ أَن
          يُعِيدَكُمۡ فِيهِ تَارَةً أُخۡرَىٰ فَيُرۡسِلَ عَلَيۡكُمۡ قَاصِفٗا
          مِّنَ ٱلرِّيحِ فَيُغۡرِقَكُم بِمَا كَفَرۡتُمۡ ثُمَّ لَا تَجِدُواْ
          لَكُمۡ عَلَيۡنَا بِهِۦ تَبِيعٗا
          <span className="numberTheme"> (69) </span>
          <span className="partTheme"> ۞ </span>وَلَقَدۡ كَرَّمۡنَا بَنِيٓ
          ءَادَمَ وَحَمَلۡنَٰهُمۡ فِي ٱلۡبَرِّ وَٱلۡبَحۡرِ وَرَزَقۡنَٰهُم مِّنَ
          ٱلطَّيِّبَٰتِ وَفَضَّلۡنَٰهُمۡ عَلَىٰ كَثِيرٖ مِّمَّنۡ خَلَقۡنَا
          تَفۡضِيلٗا
          <span className="numberTheme"> (70) </span> يَوۡمَ نَدۡعُواْ كُلَّ
          أُنَاسِۭ بِإِمَٰمِهِمۡۖ فَمَنۡ أُوتِيَ كِتَٰبَهُۥ بِيَمِينِهِۦ
          فَأُوْلَٰٓئِكَ يَقۡرَءُونَ كِتَٰبَهُمۡ وَلَا يُظۡلَمُونَ فَتِيلٗا
          <span className="numberTheme"> (71) </span> وَمَن كَانَ فِي هَٰذِهِۦٓ
          أَعۡمَىٰ فَهُوَ فِي ٱلۡأٓخِرَةِ أَعۡمَىٰ وَأَضَلُّ سَبِيلٗا
          <span className="numberTheme"> (72) </span> وَإِن كَادُواْ
          لَيَفۡتِنُونَكَ عَنِ ٱلَّذِيٓ أَوۡحَيۡنَآ إِلَيۡكَ لِتَفۡتَرِيَ
          عَلَيۡنَا غَيۡرَهُۥۖ وَإِذٗا لَّٱتَّخَذُوكَ خَلِيلٗا
          <span className="numberTheme"> (73) </span> وَلَوۡلَآ أَن
          ثَبَّتۡنَٰكَ لَقَدۡ كِدتَّ تَرۡكَنُ إِلَيۡهِمۡ شَيۡـٔٗا قَلِيلًا
          <span className="numberTheme"> (74) </span> إِذٗا لَّأَذَقۡنَٰكَ
          ضِعۡفَ ٱلۡحَيَوٰةِ وَضِعۡفَ ٱلۡمَمَاتِ ثُمَّ لَا تَجِدُ لَكَ عَلَيۡنَا
          نَصِيرٗا
          <span className="numberTheme"> (75) </span> وَإِن كَادُواْ
          لَيَسۡتَفِزُّونَكَ مِنَ ٱلۡأَرۡضِ لِيُخۡرِجُوكَ مِنۡهَاۖ وَإِذٗا لَّا
          يَلۡبَثُونَ خِلَٰفَكَ إِلَّا قَلِيلٗا
          <span className="numberTheme"> (76) </span> سُنَّةَ مَن قَدۡ
          أَرۡسَلۡنَا قَبۡلَكَ مِن رُّسُلِنَاۖ وَلَا تَجِدُ لِسُنَّتِنَا
          تَحۡوِيلًا
          <span className="numberTheme"> (77) </span> أَقِمِ ٱلصَّلَوٰةَ
          لِدُلُوكِ ٱلشَّمۡسِ إِلَىٰ غَسَقِ ٱلَّيۡلِ وَقُرۡءَانَ ٱلۡفَجۡرِۖ
          إِنَّ قُرۡءَانَ ٱلۡفَجۡرِ كَانَ مَشۡهُودٗا
          <span className="numberTheme"> (78) </span> وَمِنَ ٱلَّيۡلِ
          فَتَهَجَّدۡ بِهِۦ نَافِلَةٗ لَّكَ عَسَىٰٓ أَن يَبۡعَثَكَ رَبُّكَ
          مَقَامٗا مَّحۡمُودٗا
          <span className="numberTheme"> (79) </span> وَقُل رَّبِّ أَدۡخِلۡنِي
          مُدۡخَلَ صِدۡقٖ وَأَخۡرِجۡنِي مُخۡرَجَ صِدۡقٖ وَٱجۡعَل لِّي مِن
          لَّدُنكَ سُلۡطَٰنٗا نَّصِيرٗا
          <span className="numberTheme"> (80) </span> وَقُلۡ جَآءَ ٱلۡحَقُّ
          وَزَهَقَ ٱلۡبَٰطِلُۚ إِنَّ ٱلۡبَٰطِلَ كَانَ زَهُوقٗا
          <span className="numberTheme"> (81) </span> وَنُنَزِّلُ مِنَ
          ٱلۡقُرۡءَانِ مَا هُوَ شِفَآءٞ وَرَحۡمَةٞ لِّلۡمُؤۡمِنِينَ وَلَا
          يَزِيدُ ٱلظَّٰلِمِينَ إِلَّا خَسَارٗا
          <span className="numberTheme"> (82) </span> وَإِذَآ أَنۡعَمۡنَا عَلَى
          ٱلۡإِنسَٰنِ أَعۡرَضَ وَنَـَٔا بِجَانِبِهِۦ وَإِذَا مَسَّهُ ٱلشَّرُّ
          كَانَ يَـُٔوسٗا
          <span className="numberTheme"> (83) </span> قُلۡ كُلّٞ يَعۡمَلُ عَلَىٰ
          شَاكِلَتِهِۦ فَرَبُّكُمۡ أَعۡلَمُ بِمَنۡ هُوَ أَهۡدَىٰ سَبِيلٗا
          <span className="numberTheme"> (84) </span>
          وَيَسۡـَٔلُونَكَ عَنِ ٱلرُّوحِۖ قُلِ ٱلرُّوحُ مِنۡ أَمۡرِ رَبِّي
          وَمَآ أُوتِيتُم مِّنَ ٱلۡعِلۡمِ إِلَّا قَلِيلٗا
          <span className="numberTheme"> (85) </span> وَلَئِن شِئۡنَا
          لَنَذۡهَبَنَّ بِٱلَّذِيٓ أَوۡحَيۡنَآ إِلَيۡكَ ثُمَّ لَا تَجِدُ لَكَ
          بِهِۦ عَلَيۡنَا وَكِيلًا
          <span className="numberTheme"> (86) </span> إِلَّا رَحۡمَةٗ مِّن
          رَّبِّكَۚ إِنَّ فَضۡلَهُۥ كَانَ عَلَيۡكَ كَبِيرٗا
          <span className="numberTheme"> (87) </span> قُل لَّئِنِ ٱجۡتَمَعَتِ
          ٱلۡإِنسُ وَٱلۡجِنُّ عَلَىٰٓ أَن يَأۡتُواْ بِمِثۡلِ هَٰذَا ٱلۡقُرۡءَانِ
          لَا يَأۡتُونَ بِمِثۡلِهِۦ وَلَوۡ كَانَ بَعۡضُهُمۡ لِبَعۡضٖ ظَهِيرٗا
          <span className="numberTheme"> (88) </span> وَلَقَدۡ صَرَّفۡنَا
          لِلنَّاسِ فِي هَٰذَا ٱلۡقُرۡءَانِ مِن كُلِّ مَثَلٖ فَأَبَىٰٓ أَكۡثَرُ
          ٱلنَّاسِ إِلَّا كُفُورٗا
          <span className="numberTheme"> (89) </span> وَقَالُواْ لَن نُّؤۡمِنَ
          لَكَ حَتَّىٰ تَفۡجُرَ لَنَا مِنَ ٱلۡأَرۡضِ يَنۢبُوعًا
          <span className="numberTheme"> (90) </span>
          أَوۡ تَكُونَ لَكَ جَنَّةٞ مِّن نَّخِيلٖ وَعِنَبٖ فَتُفَجِّرَ
          ٱلۡأَنۡهَٰرَ خِلَٰلَهَا تَفۡجِيرًا
          <span className="numberTheme"> (91) </span> أَوۡ تُسۡقِطَ ٱلسَّمَآءَ
          كَمَا زَعَمۡتَ عَلَيۡنَا كِسَفًا أَوۡ تَأۡتِيَ بِٱللَّهِ
          وَٱلۡمَلَٰٓئِكَةِ قَبِيلًا
          <span className="numberTheme"> (92) </span> أَوۡ يَكُونَ لَكَ بَيۡتٞ
          مِّن زُخۡرُفٍ أَوۡ تَرۡقَىٰ فِي ٱلسَّمَآءِ وَلَن نُّؤۡمِنَ
          لِرُقِيِّكَ حَتَّىٰ تُنَزِّلَ عَلَيۡنَا كِتَٰبٗا نَّقۡرَؤُهُۥۗ قُلۡ
          سُبۡحَانَ رَبِّي هَلۡ كُنتُ إِلَّا بَشَرٗا رَّسُولٗا
          <span className="numberTheme"> (93) </span> وَمَا مَنَعَ ٱلنَّاسَ أَن
          يُؤۡمِنُوٓاْ إِذۡ جَآءَهُمُ ٱلۡهُدَىٰٓ إِلَّآ أَن قَالُوٓاْ أَبَعَثَ
          ٱللَّهُ بَشَرٗا رَّسُولٗا
          <span className="numberTheme"> (94) </span> قُل لَّوۡ كَانَ فِي
          ٱلۡأَرۡضِ مَلَٰٓئِكَةٞ يَمۡشُونَ مُطۡمَئِنِّينَ لَنَزَّلۡنَا عَلَيۡهِم
          مِّنَ ٱلسَّمَآءِ مَلَكٗا رَّسُولٗا
          <span className="numberTheme"> (95) </span> قُلۡ كَفَىٰ بِٱللَّهِ
          شَهِيدَۢا بَيۡنِي وَبَيۡنَكُمۡۚ إِنَّهُۥ كَانَ بِعِبَادِهِۦ خَبِيرَۢا
          بَصِيرٗا
          <span className="numberTheme"> (96) </span> وَمَن يَهۡدِ ٱللَّهُ
          فَهُوَ ٱلۡمُهۡتَدِۖ وَمَن يُضۡلِلۡ فَلَن تَجِدَ لَهُمۡ أَوۡلِيَآءَ
          مِن دُونِهِۦۖ وَنَحۡشُرُهُمۡ يَوۡمَ ٱلۡقِيَٰمَةِ عَلَىٰ وُجُوهِهِمۡ
          عُمۡيٗا وَبُكۡمٗا وَصُمّٗاۖ مَّأۡوَىٰهُمۡ جَهَنَّمُۖ كُلَّمَا خَبَتۡ
          زِدۡنَٰهُمۡ سَعِيرٗا
          <span className="numberTheme"> (97) </span>
          ذَٰلِكَ جَزَآؤُهُم بِأَنَّهُمۡ كَفَرُواْ بِـَٔايَٰتِنَا وَقَالُوٓاْ
          أَءِذَا كُنَّا عِظَٰمٗا وَرُفَٰتًا أَءِنَّا لَمَبۡعُوثُونَ خَلۡقٗا
          جَدِيدًا
          <span className="numberTheme"> (98) </span>
          <span className="partTheme"> ۞ </span>أَوَ لَمۡ يَرَوۡاْ أَنَّ ٱللَّهَ
          ٱلَّذِي خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ قَادِرٌ عَلَىٰٓ أَن يَخۡلُقَ
          مِثۡلَهُمۡ وَجَعَلَ لَهُمۡ أَجَلٗا لَّا رَيۡبَ فِيهِ فَأَبَى
          ٱلظَّٰلِمُونَ إِلَّا كُفُورٗا
          <span className="numberTheme"> (99) </span> قُل لَّوۡ أَنتُمۡ
          تَمۡلِكُونَ خَزَآئِنَ رَحۡمَةِ رَبِّيٓ إِذٗا لَّأَمۡسَكۡتُمۡ خَشۡيَةَ
          ٱلۡإِنفَاقِۚ وَكَانَ ٱلۡإِنسَٰنُ قَتُورٗا
          <span className="numberTheme"> (100) </span> وَلَقَدۡ ءَاتَيۡنَا
          مُوسَىٰ تِسۡعَ ءَايَٰتِۭ بَيِّنَٰتٖۖ فَسۡـَٔلۡ بَنِيٓ إِسۡرَٰٓءِيلَ
          إِذۡ جَآءَهُمۡ فَقَالَ لَهُۥ فِرۡعَوۡنُ إِنِّي لَأَظُنُّكَ يَٰمُوسَىٰ
          مَسۡحُورٗا
          <span className="numberTheme"> (101) </span> قَالَ لَقَدۡ عَلِمۡتَ
          مَآ أَنزَلَ هَٰٓؤُلَآءِ إِلَّا رَبُّ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ
          بَصَآئِرَ وَإِنِّي لَأَظُنُّكَ يَٰفِرۡعَوۡنُ مَثۡبُورٗا
          <span className="numberTheme"> (102) </span> فَأَرَادَ أَن
          يَسۡتَفِزَّهُم مِّنَ ٱلۡأَرۡضِ فَأَغۡرَقۡنَٰهُ وَمَن مَّعَهُۥ جَمِيعٗا
          <span className="numberTheme"> (103) </span> وَقُلۡنَا مِنۢ بَعۡدِهِۦ
          لِبَنِيٓ إِسۡرَٰٓءِيلَ ٱسۡكُنُواْ ٱلۡأَرۡضَ فَإِذَا جَآءَ وَعۡدُ
          ٱلۡأٓخِرَةِ جِئۡنَا بِكُمۡ لَفِيفٗا
          <span className="numberTheme"> (104) </span> وَبِٱلۡحَقِّ أَنزَلۡنَٰهُ
          وَبِٱلۡحَقِّ نَزَلَۗ وَمَآ أَرۡسَلۡنَٰكَ إِلَّا مُبَشِّرٗا وَنَذِيرٗا
          <span className="numberTheme"> (105) </span> وَقُرۡءَانٗا فَرَقۡنَٰهُ
          لِتَقۡرَأَهُۥ عَلَى ٱلنَّاسِ عَلَىٰ مُكۡثٖ وَنَزَّلۡنَٰهُ تَنزِيلٗا
          <span className="numberTheme"> (106) </span> قُلۡ ءَامِنُواْ بِهِۦٓ
          أَوۡ لَا تُؤۡمِنُوٓاْۚ إِنَّ ٱلَّذِينَ أُوتُواْ ٱلۡعِلۡمَ مِن
          قَبۡلِهِۦٓ إِذَا يُتۡلَىٰ عَلَيۡهِمۡ يَخِرُّونَۤ لِلۡأَذۡقَانِۤ
          سُجَّدٗاۤ
          <span className="numberTheme"> (107) </span> وَيَقُولُونَ سُبۡحَٰنَ
          رَبِّنَآ إِن كَانَ وَعۡدُ رَبِّنَا لَمَفۡعُولٗا
          <span className="numberTheme"> (108) </span> وَيَخِرُّونَ
          لِلۡأَذۡقَانِ يَبۡكُونَ وَيَزِيدُهُمۡ خُشُوعٗا۩
          <span className="numberTheme"> (109) </span> قُلِ ٱدۡعُواْ ٱللَّهَ
          أَوِ ٱدۡعُواْ ٱلرَّحۡمَٰنَۖ أَيّٗا مَّا تَدۡعُواْ فَلَهُ ٱلۡأَسۡمَآءُ
          ٱلۡحُسۡنَىٰۚ وَلَا تَجۡهَرۡ بِصَلَاتِكَ وَلَا تُخَافِتۡ بِهَا
          وَٱبۡتَغِ بَيۡنَ ذَٰلِكَ سَبِيلٗا
          <span className="numberTheme"> (110) </span> وَقُلِ ٱلۡحَمۡدُ لِلَّهِ
          ٱلَّذِي لَمۡ يَتَّخِذۡ وَلَدٗا وَلَمۡ يَكُن لَّهُۥ شَرِيكٞ فِي
          ٱلۡمُلۡكِ وَلَمۡ يَكُن لَّهُۥ وَلِيّٞ مِّنَ ٱلذُّلِّۖ وَكَبِّرۡهُ
          تَكۡبِيرَۢا
          <span className="numberTheme"> (111) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default Seventeen;
