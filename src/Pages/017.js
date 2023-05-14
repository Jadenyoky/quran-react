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
          لِنُرِيَهُۥ مِنۡ ءَايَٰتِنَآۚ إِنَّهُۥ هُوَ ٱلسَّمِيعُ ٱلۡبَصِيرُ (1)
          وَءَاتَيۡنَا مُوسَى ٱلۡكِتَٰبَ وَجَعَلۡنَٰهُ هُدٗى لِّبَنِيٓ
          إِسۡرَٰٓءِيلَ أَلَّا تَتَّخِذُواْ مِن دُونِي وَكِيلٗا (2) ذُرِّيَّةَ
          مَنۡ حَمَلۡنَا مَعَ نُوحٍۚ إِنَّهُۥ كَانَ عَبۡدٗا شَكُورٗا (3)
          وَقَضَيۡنَآ إِلَىٰ بَنِيٓ إِسۡرَٰٓءِيلَ فِي ٱلۡكِتَٰبِ لَتُفۡسِدُنَّ
          فِي ٱلۡأَرۡضِ مَرَّتَيۡنِ وَلَتَعۡلُنَّ عُلُوّٗا كَبِيرٗا (4) فَإِذَا
          جَآءَ وَعۡدُ أُولَىٰهُمَا بَعَثۡنَا عَلَيۡكُمۡ عِبَادٗا لَّنَآ
          أُوْلِي بَأۡسٖ شَدِيدٖ فَجَاسُواْ خِلَٰلَ ٱلدِّيَارِۚ وَكَانَ وَعۡدٗا
          مَّفۡعُولٗا (5) ثُمَّ رَدَدۡنَا لَكُمُ ٱلۡكَرَّةَ عَلَيۡهِمۡ
          وَأَمۡدَدۡنَٰكُم بِأَمۡوَٰلٖ وَبَنِينَ وَجَعَلۡنَٰكُمۡ أَكۡثَرَ
          نَفِيرًا (6) إِنۡ أَحۡسَنتُمۡ أَحۡسَنتُمۡ لِأَنفُسِكُمۡۖ وَإِنۡ
          أَسَأۡتُمۡ فَلَهَاۚ فَإِذَا جَآءَ وَعۡدُ ٱلۡأٓخِرَةِ لِيَسُـُٔواْ
          وُجُوهَكُمۡ وَلِيَدۡخُلُواْ ٱلۡمَسۡجِدَ كَمَا دَخَلُوهُ أَوَّلَ
          مَرَّةٖ وَلِيُتَبِّرُواْ مَا عَلَوۡاْ تَتۡبِيرًا (7) عَسَىٰ رَبُّكُمۡ
          أَن يَرۡحَمَكُمۡۚ وَإِنۡ عُدتُّمۡ عُدۡنَاۚ وَجَعَلۡنَا جَهَنَّمَ
          لِلۡكَٰفِرِينَ حَصِيرًا (8) إِنَّ هَٰذَا ٱلۡقُرۡءَانَ يَهۡدِي لِلَّتِي
          هِيَ أَقۡوَمُ وَيُبَشِّرُ ٱلۡمُؤۡمِنِينَ ٱلَّذِينَ يَعۡمَلُونَ
          ٱلصَّٰلِحَٰتِ أَنَّ لَهُمۡ أَجۡرٗا كَبِيرٗا (9) وَأَنَّ ٱلَّذِينَ لَا
          يُؤۡمِنُونَ بِٱلۡأٓخِرَةِ أَعۡتَدۡنَا لَهُمۡ عَذَابًا أَلِيمٗا (10)
          وَيَدۡعُ ٱلۡإِنسَٰنُ بِٱلشَّرِّ دُعَآءَهُۥ بِٱلۡخَيۡرِۖ وَكَانَ
          ٱلۡإِنسَٰنُ عَجُولٗا (11) وَجَعَلۡنَا ٱلَّيۡلَ وَٱلنَّهَارَ
          ءَايَتَيۡنِۖ فَمَحَوۡنَآ ءَايَةَ ٱلَّيۡلِ وَجَعَلۡنَآ ءَايَةَ
          ٱلنَّهَارِ مُبۡصِرَةٗ لِّتَبۡتَغُواْ فَضۡلٗا مِّن رَّبِّكُمۡ
          وَلِتَعۡلَمُواْ عَدَدَ ٱلسِّنِينَ وَٱلۡحِسَابَۚ وَكُلَّ شَيۡءٖ
          فَصَّلۡنَٰهُ تَفۡصِيلٗا (12) وَكُلَّ إِنسَٰنٍ أَلۡزَمۡنَٰهُ
          طَٰٓئِرَهُۥ فِي عُنُقِهِۦۖ وَنُخۡرِجُ لَهُۥ يَوۡمَ ٱلۡقِيَٰمَةِ
          كِتَٰبٗا يَلۡقَىٰهُ مَنشُورًا (13) ٱقۡرَأۡ كِتَٰبَكَ كَفَىٰ بِنَفۡسِكَ
          ٱلۡيَوۡمَ عَلَيۡكَ حَسِيبٗا (14) مَّنِ ٱهۡتَدَىٰ فَإِنَّمَا يَهۡتَدِي
          لِنَفۡسِهِۦۖ وَمَن ضَلَّ فَإِنَّمَا يَضِلُّ عَلَيۡهَاۚ وَلَا تَزِرُ
          وَازِرَةٞ وِزۡرَ أُخۡرَىٰۗ وَمَا كُنَّا مُعَذِّبِينَ حَتَّىٰ نَبۡعَثَ
          رَسُولٗا (15) وَإِذَآ أَرَدۡنَآ أَن نُّهۡلِكَ قَرۡيَةً أَمَرۡنَا
          مُتۡرَفِيهَا فَفَسَقُواْ فِيهَا فَحَقَّ عَلَيۡهَا ٱلۡقَوۡلُ
          فَدَمَّرۡنَٰهَا تَدۡمِيرٗا (16) وَكَمۡ أَهۡلَكۡنَا مِنَ ٱلۡقُرُونِ
          مِنۢ بَعۡدِ نُوحٖۗ وَكَفَىٰ بِرَبِّكَ بِذُنُوبِ عِبَادِهِۦ خَبِيرَۢا
          بَصِيرٗا (17) مَّن كَانَ يُرِيدُ ٱلۡعَاجِلَةَ عَجَّلۡنَا لَهُۥ فِيهَا
          مَا نَشَآءُ لِمَن نُّرِيدُ ثُمَّ جَعَلۡنَا لَهُۥ جَهَنَّمَ
          يَصۡلَىٰهَا مَذۡمُومٗا مَّدۡحُورٗا (18) وَمَنۡ أَرَادَ ٱلۡأٓخِرَةَ
          وَسَعَىٰ لَهَا سَعۡيَهَا وَهُوَ مُؤۡمِنٞ فَأُوْلَٰٓئِكَ كَانَ
          سَعۡيُهُم مَّشۡكُورٗا (19) كُلّٗا نُّمِدُّ هَٰٓؤُلَآءِ وَهَٰٓؤُلَآءِ
          مِنۡ عَطَآءِ رَبِّكَۚ وَمَا كَانَ عَطَآءُ رَبِّكَ مَحۡظُورًا (20)
          ٱنظُرۡ كَيۡفَ فَضَّلۡنَا بَعۡضَهُمۡ عَلَىٰ بَعۡضٖۚ وَلَلۡأٓخِرَةُ
          أَكۡبَرُ دَرَجَٰتٖ وَأَكۡبَرُ تَفۡضِيلٗا (21) لَّا تَجۡعَلۡ مَعَ
          ٱللَّهِ إِلَٰهًا ءَاخَرَ فَتَقۡعُدَ مَذۡمُومٗا مَّخۡذُولٗا (22)
          ۞وَقَضَىٰ رَبُّكَ أَلَّا تَعۡبُدُوٓاْ إِلَّآ إِيَّاهُ
          وَبِٱلۡوَٰلِدَيۡنِ إِحۡسَٰنًاۚ إِمَّا يَبۡلُغَنَّ عِندَكَ ٱلۡكِبَرَ
          أَحَدُهُمَآ أَوۡ كِلَاهُمَا فَلَا تَقُل لَّهُمَآ أُفّٖ وَلَا
          تَنۡهَرۡهُمَا وَقُل لَّهُمَا قَوۡلٗا كَرِيمٗا (23) وَٱخۡفِضۡ لَهُمَا
          جَنَاحَ ٱلذُّلِّ مِنَ ٱلرَّحۡمَةِ وَقُل رَّبِّ ٱرۡحَمۡهُمَا كَمَا
          رَبَّيَانِي صَغِيرٗا (24) رَّبُّكُمۡ أَعۡلَمُ بِمَا فِي نُفُوسِكُمۡۚ
          إِن تَكُونُواْ صَٰلِحِينَ فَإِنَّهُۥ كَانَ لِلۡأَوَّٰبِينَ غَفُورٗا
          (25) وَءَاتِ ذَا ٱلۡقُرۡبَىٰ حَقَّهُۥ وَٱلۡمِسۡكِينَ وَٱبۡنَ
          ٱلسَّبِيلِ وَلَا تُبَذِّرۡ تَبۡذِيرًا (26) إِنَّ ٱلۡمُبَذِّرِينَ
          كَانُوٓاْ إِخۡوَٰنَ ٱلشَّيَٰطِينِۖ وَكَانَ ٱلشَّيۡطَٰنُ لِرَبِّهِۦ
          كَفُورٗا (27) وَإِمَّا تُعۡرِضَنَّ عَنۡهُمُ ٱبۡتِغَآءَ رَحۡمَةٖ مِّن
          رَّبِّكَ تَرۡجُوهَا فَقُل لَّهُمۡ قَوۡلٗا مَّيۡسُورٗا (28) وَلَا
          تَجۡعَلۡ يَدَكَ مَغۡلُولَةً إِلَىٰ عُنُقِكَ وَلَا تَبۡسُطۡهَا كُلَّ
          ٱلۡبَسۡطِ فَتَقۡعُدَ مَلُومٗا مَّحۡسُورًا (29) إِنَّ رَبَّكَ يَبۡسُطُ
          ٱلرِّزۡقَ لِمَن يَشَآءُ وَيَقۡدِرُۚ إِنَّهُۥ كَانَ بِعِبَادِهِۦ
          خَبِيرَۢا بَصِيرٗا (30) وَلَا تَقۡتُلُوٓاْ أَوۡلَٰدَكُمۡ خَشۡيَةَ
          إِمۡلَٰقٖۖ نَّحۡنُ نَرۡزُقُهُمۡ وَإِيَّاكُمۡۚ إِنَّ قَتۡلَهُمۡ كَانَ
          خِطۡـٔٗا كَبِيرٗا (31) وَلَا تَقۡرَبُواْ ٱلزِّنَىٰٓۖ إِنَّهُۥ كَانَ
          فَٰحِشَةٗ وَسَآءَ سَبِيلٗا (32) وَلَا تَقۡتُلُواْ ٱلنَّفۡسَ ٱلَّتِي
          حَرَّمَ ٱللَّهُ إِلَّا بِٱلۡحَقِّۗ وَمَن قُتِلَ مَظۡلُومٗا فَقَدۡ
          جَعَلۡنَا لِوَلِيِّهِۦ سُلۡطَٰنٗا فَلَا يُسۡرِف فِّي ٱلۡقَتۡلِۖ
          إِنَّهُۥ كَانَ مَنصُورٗا (33) وَلَا تَقۡرَبُواْ مَالَ ٱلۡيَتِيمِ
          إِلَّا بِٱلَّتِي هِيَ أَحۡسَنُ حَتَّىٰ يَبۡلُغَ أَشُدَّهُۥۚ
          وَأَوۡفُواْ بِٱلۡعَهۡدِۖ إِنَّ ٱلۡعَهۡدَ كَانَ مَسۡـُٔولٗا (34)
          وَأَوۡفُواْ ٱلۡكَيۡلَ إِذَا كِلۡتُمۡ وَزِنُواْ بِٱلۡقِسۡطَاسِ
          ٱلۡمُسۡتَقِيمِۚ ذَٰلِكَ خَيۡرٞ وَأَحۡسَنُ تَأۡوِيلٗا (35) وَلَا تَقۡفُ
          مَا لَيۡسَ لَكَ بِهِۦ عِلۡمٌۚ إِنَّ ٱلسَّمۡعَ وَٱلۡبَصَرَ وَٱلۡفُؤَادَ
          كُلُّ أُوْلَٰٓئِكَ كَانَ عَنۡهُ مَسۡـُٔولٗا (36) وَلَا تَمۡشِ فِي
          ٱلۡأَرۡضِ مَرَحًاۖ إِنَّكَ لَن تَخۡرِقَ ٱلۡأَرۡضَ وَلَن تَبۡلُغَ
          ٱلۡجِبَالَ طُولٗا (37) كُلُّ ذَٰلِكَ كَانَ سَيِّئُهُۥ عِندَ رَبِّكَ
          مَكۡرُوهٗا (38) ذَٰلِكَ مِمَّآ أَوۡحَىٰٓ إِلَيۡكَ رَبُّكَ مِنَ
          ٱلۡحِكۡمَةِۗ وَلَا تَجۡعَلۡ مَعَ ٱللَّهِ إِلَٰهًا ءَاخَرَ فَتُلۡقَىٰ
          فِي جَهَنَّمَ مَلُومٗا مَّدۡحُورًا (39) أَفَأَصۡفَىٰكُمۡ رَبُّكُم
          بِٱلۡبَنِينَ وَٱتَّخَذَ مِنَ ٱلۡمَلَٰٓئِكَةِ إِنَٰثًاۚ إِنَّكُمۡ
          لَتَقُولُونَ قَوۡلًا عَظِيمٗا (40) وَلَقَدۡ صَرَّفۡنَا فِي هَٰذَا
          ٱلۡقُرۡءَانِ لِيَذَّكَّرُواْ وَمَا يَزِيدُهُمۡ إِلَّا نُفُورٗا (41)
          قُل لَّوۡ كَانَ مَعَهُۥٓ ءَالِهَةٞ كَمَا يَقُولُونَ إِذٗا
          لَّٱبۡتَغَوۡاْ إِلَىٰ ذِي ٱلۡعَرۡشِ سَبِيلٗا (42) سُبۡحَٰنَهُۥ
          وَتَعَٰلَىٰ عَمَّا يَقُولُونَ عُلُوّٗا كَبِيرٗا (43) تُسَبِّحُ لَهُ
          ٱلسَّمَٰوَٰتُ ٱلسَّبۡعُ وَٱلۡأَرۡضُ وَمَن فِيهِنَّۚ وَإِن مِّن شَيۡءٍ
          إِلَّا يُسَبِّحُ بِحَمۡدِهِۦ وَلَٰكِن لَّا تَفۡقَهُونَ تَسۡبِيحَهُمۡۚ
          إِنَّهُۥ كَانَ حَلِيمًا غَفُورٗا (44) وَإِذَا قَرَأۡتَ ٱلۡقُرۡءَانَ
          جَعَلۡنَا بَيۡنَكَ وَبَيۡنَ ٱلَّذِينَ لَا يُؤۡمِنُونَ بِٱلۡأٓخِرَةِ
          حِجَابٗا مَّسۡتُورٗا (45) وَجَعَلۡنَا عَلَىٰ قُلُوبِهِمۡ أَكِنَّةً أَن
          يَفۡقَهُوهُ وَفِيٓ ءَاذَانِهِمۡ وَقۡرٗاۚ وَإِذَا ذَكَرۡتَ رَبَّكَ فِي
          ٱلۡقُرۡءَانِ وَحۡدَهُۥ وَلَّوۡاْ عَلَىٰٓ أَدۡبَٰرِهِمۡ نُفُورٗا (46)
          نَّحۡنُ أَعۡلَمُ بِمَا يَسۡتَمِعُونَ بِهِۦٓ إِذۡ يَسۡتَمِعُونَ
          إِلَيۡكَ وَإِذۡ هُمۡ نَجۡوَىٰٓ إِذۡ يَقُولُ ٱلظَّٰلِمُونَ إِن
          تَتَّبِعُونَ إِلَّا رَجُلٗا مَّسۡحُورًا (47) ٱنظُرۡ كَيۡفَ ضَرَبُواْ
          لَكَ ٱلۡأَمۡثَالَ فَضَلُّواْ فَلَا يَسۡتَطِيعُونَ سَبِيلٗا (48)
          وَقَالُوٓاْ أَءِذَا كُنَّا عِظَٰمٗا وَرُفَٰتًا أَءِنَّا لَمَبۡعُوثُونَ
          خَلۡقٗا جَدِيدٗا (49) ۞قُلۡ كُونُواْ حِجَارَةً أَوۡ حَدِيدًا (50) أَوۡ
          خَلۡقٗا مِّمَّا يَكۡبُرُ فِي صُدُورِكُمۡۚ فَسَيَقُولُونَ مَن
          يُعِيدُنَاۖ قُلِ ٱلَّذِي فَطَرَكُمۡ أَوَّلَ مَرَّةٖۚ فَسَيُنۡغِضُونَ
          إِلَيۡكَ رُءُوسَهُمۡ وَيَقُولُونَ مَتَىٰ هُوَۖ قُلۡ عَسَىٰٓ أَن
          يَكُونَ قَرِيبٗا (51) يَوۡمَ يَدۡعُوكُمۡ فَتَسۡتَجِيبُونَ بِحَمۡدِهِۦ
          وَتَظُنُّونَ إِن لَّبِثۡتُمۡ إِلَّا قَلِيلٗا (52) وَقُل لِّعِبَادِي
          يَقُولُواْ ٱلَّتِي هِيَ أَحۡسَنُۚ إِنَّ ٱلشَّيۡطَٰنَ يَنزَغُ
          بَيۡنَهُمۡۚ إِنَّ ٱلشَّيۡطَٰنَ كَانَ لِلۡإِنسَٰنِ عَدُوّٗا مُّبِينٗا
          (53) رَّبُّكُمۡ أَعۡلَمُ بِكُمۡۖ إِن يَشَأۡ يَرۡحَمۡكُمۡ أَوۡ إِن
          يَشَأۡ يُعَذِّبۡكُمۡۚ وَمَآ أَرۡسَلۡنَٰكَ عَلَيۡهِمۡ وَكِيلٗا (54)
          وَرَبُّكَ أَعۡلَمُ بِمَن فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۗ وَلَقَدۡ
          فَضَّلۡنَا بَعۡضَ ٱلنَّبِيِّـۧنَ عَلَىٰ بَعۡضٖۖ وَءَاتَيۡنَا دَاوُۥدَ
          زَبُورٗا (55) قُلِ ٱدۡعُواْ ٱلَّذِينَ زَعَمۡتُم مِّن دُونِهِۦ فَلَا
          يَمۡلِكُونَ كَشۡفَ ٱلضُّرِّ عَنكُمۡ وَلَا تَحۡوِيلًا (56) أُوْلَٰٓئِكَ
          ٱلَّذِينَ يَدۡعُونَ يَبۡتَغُونَ إِلَىٰ رَبِّهِمُ ٱلۡوَسِيلَةَ
          أَيُّهُمۡ أَقۡرَبُ وَيَرۡجُونَ رَحۡمَتَهُۥ وَيَخَافُونَ عَذَابَهُۥٓۚ
          إِنَّ عَذَابَ رَبِّكَ كَانَ مَحۡذُورٗا (57) وَإِن مِّن قَرۡيَةٍ إِلَّا
          نَحۡنُ مُهۡلِكُوهَا قَبۡلَ يَوۡمِ ٱلۡقِيَٰمَةِ أَوۡ مُعَذِّبُوهَا
          عَذَابٗا شَدِيدٗاۚ كَانَ ذَٰلِكَ فِي ٱلۡكِتَٰبِ مَسۡطُورٗا (58) وَمَا
          مَنَعَنَآ أَن نُّرۡسِلَ بِٱلۡأٓيَٰتِ إِلَّآ أَن كَذَّبَ بِهَا
          ٱلۡأَوَّلُونَۚ وَءَاتَيۡنَا ثَمُودَ ٱلنَّاقَةَ مُبۡصِرَةٗ فَظَلَمُواْ
          بِهَاۚ وَمَا نُرۡسِلُ بِٱلۡأٓيَٰتِ إِلَّا تَخۡوِيفٗا (59) وَإِذۡ
          قُلۡنَا لَكَ إِنَّ رَبَّكَ أَحَاطَ بِٱلنَّاسِۚ وَمَا جَعَلۡنَا
          ٱلرُّءۡيَا ٱلَّتِيٓ أَرَيۡنَٰكَ إِلَّا فِتۡنَةٗ لِّلنَّاسِ
          وَٱلشَّجَرَةَ ٱلۡمَلۡعُونَةَ فِي ٱلۡقُرۡءَانِۚ وَنُخَوِّفُهُمۡ فَمَا
          يَزِيدُهُمۡ إِلَّا طُغۡيَٰنٗا كَبِيرٗا (60) وَإِذۡ قُلۡنَا
          لِلۡمَلَٰٓئِكَةِ ٱسۡجُدُواْ لِأٓدَمَ فَسَجَدُوٓاْ إِلَّآ إِبۡلِيسَ
          قَالَ ءَأَسۡجُدُ لِمَنۡ خَلَقۡتَ طِينٗا (61) قَالَ أَرَءَيۡتَكَ هَٰذَا
          ٱلَّذِي كَرَّمۡتَ عَلَيَّ لَئِنۡ أَخَّرۡتَنِ إِلَىٰ يَوۡمِ
          ٱلۡقِيَٰمَةِ لَأَحۡتَنِكَنَّ ذُرِّيَّتَهُۥٓ إِلَّا قَلِيلٗا (62) قَالَ
          ٱذۡهَبۡ فَمَن تَبِعَكَ مِنۡهُمۡ فَإِنَّ جَهَنَّمَ جَزَآؤُكُمۡ
          جَزَآءٗ مَّوۡفُورٗا (63) وَٱسۡتَفۡزِزۡ مَنِ ٱسۡتَطَعۡتَ مِنۡهُم
          بِصَوۡتِكَ وَأَجۡلِبۡ عَلَيۡهِم بِخَيۡلِكَ وَرَجِلِكَ وَشَارِكۡهُمۡ
          فِي ٱلۡأَمۡوَٰلِ وَٱلۡأَوۡلَٰدِ وَعِدۡهُمۡۚ وَمَا يَعِدُهُمُ
          ٱلشَّيۡطَٰنُ إِلَّا غُرُورًا (64) إِنَّ عِبَادِي لَيۡسَ لَكَ
          عَلَيۡهِمۡ سُلۡطَٰنٞۚ وَكَفَىٰ بِرَبِّكَ وَكِيلٗا (65) رَّبُّكُمُ
          ٱلَّذِي يُزۡجِي لَكُمُ ٱلۡفُلۡكَ فِي ٱلۡبَحۡرِ لِتَبۡتَغُواْ مِن
          فَضۡلِهِۦٓۚ إِنَّهُۥ كَانَ بِكُمۡ رَحِيمٗا (66) وَإِذَا مَسَّكُمُ
          ٱلضُّرُّ فِي ٱلۡبَحۡرِ ضَلَّ مَن تَدۡعُونَ إِلَّآ إِيَّاهُۖ فَلَمَّا
          نَجَّىٰكُمۡ إِلَى ٱلۡبَرِّ أَعۡرَضۡتُمۡۚ وَكَانَ ٱلۡإِنسَٰنُ كَفُورًا
          (67) أَفَأَمِنتُمۡ أَن يَخۡسِفَ بِكُمۡ جَانِبَ ٱلۡبَرِّ أَوۡ يُرۡسِلَ
          عَلَيۡكُمۡ حَاصِبٗا ثُمَّ لَا تَجِدُواْ لَكُمۡ وَكِيلًا (68) أَمۡ
          أَمِنتُمۡ أَن يُعِيدَكُمۡ فِيهِ تَارَةً أُخۡرَىٰ فَيُرۡسِلَ عَلَيۡكُمۡ
          قَاصِفٗا مِّنَ ٱلرِّيحِ فَيُغۡرِقَكُم بِمَا كَفَرۡتُمۡ ثُمَّ لَا
          تَجِدُواْ لَكُمۡ عَلَيۡنَا بِهِۦ تَبِيعٗا (69) ۞وَلَقَدۡ كَرَّمۡنَا
          بَنِيٓ ءَادَمَ وَحَمَلۡنَٰهُمۡ فِي ٱلۡبَرِّ وَٱلۡبَحۡرِ وَرَزَقۡنَٰهُم
          مِّنَ ٱلطَّيِّبَٰتِ وَفَضَّلۡنَٰهُمۡ عَلَىٰ كَثِيرٖ مِّمَّنۡ خَلَقۡنَا
          تَفۡضِيلٗا (70) يَوۡمَ نَدۡعُواْ كُلَّ أُنَاسِۭ بِإِمَٰمِهِمۡۖ فَمَنۡ
          أُوتِيَ كِتَٰبَهُۥ بِيَمِينِهِۦ فَأُوْلَٰٓئِكَ يَقۡرَءُونَ كِتَٰبَهُمۡ
          وَلَا يُظۡلَمُونَ فَتِيلٗا (71) وَمَن كَانَ فِي هَٰذِهِۦٓ أَعۡمَىٰ
          فَهُوَ فِي ٱلۡأٓخِرَةِ أَعۡمَىٰ وَأَضَلُّ سَبِيلٗا (72) وَإِن كَادُواْ
          لَيَفۡتِنُونَكَ عَنِ ٱلَّذِيٓ أَوۡحَيۡنَآ إِلَيۡكَ لِتَفۡتَرِيَ
          عَلَيۡنَا غَيۡرَهُۥۖ وَإِذٗا لَّٱتَّخَذُوكَ خَلِيلٗا (73) وَلَوۡلَآ
          أَن ثَبَّتۡنَٰكَ لَقَدۡ كِدتَّ تَرۡكَنُ إِلَيۡهِمۡ شَيۡـٔٗا قَلِيلًا
          (74) إِذٗا لَّأَذَقۡنَٰكَ ضِعۡفَ ٱلۡحَيَوٰةِ وَضِعۡفَ ٱلۡمَمَاتِ ثُمَّ
          لَا تَجِدُ لَكَ عَلَيۡنَا نَصِيرٗا (75) وَإِن كَادُواْ
          لَيَسۡتَفِزُّونَكَ مِنَ ٱلۡأَرۡضِ لِيُخۡرِجُوكَ مِنۡهَاۖ وَإِذٗا لَّا
          يَلۡبَثُونَ خِلَٰفَكَ إِلَّا قَلِيلٗا (76) سُنَّةَ مَن قَدۡ
          أَرۡسَلۡنَا قَبۡلَكَ مِن رُّسُلِنَاۖ وَلَا تَجِدُ لِسُنَّتِنَا
          تَحۡوِيلًا (77) أَقِمِ ٱلصَّلَوٰةَ لِدُلُوكِ ٱلشَّمۡسِ إِلَىٰ غَسَقِ
          ٱلَّيۡلِ وَقُرۡءَانَ ٱلۡفَجۡرِۖ إِنَّ قُرۡءَانَ ٱلۡفَجۡرِ كَانَ
          مَشۡهُودٗا (78) وَمِنَ ٱلَّيۡلِ فَتَهَجَّدۡ بِهِۦ نَافِلَةٗ لَّكَ
          عَسَىٰٓ أَن يَبۡعَثَكَ رَبُّكَ مَقَامٗا مَّحۡمُودٗا (79) وَقُل رَّبِّ
          أَدۡخِلۡنِي مُدۡخَلَ صِدۡقٖ وَأَخۡرِجۡنِي مُخۡرَجَ صِدۡقٖ وَٱجۡعَل
          لِّي مِن لَّدُنكَ سُلۡطَٰنٗا نَّصِيرٗا (80) وَقُلۡ جَآءَ ٱلۡحَقُّ
          وَزَهَقَ ٱلۡبَٰطِلُۚ إِنَّ ٱلۡبَٰطِلَ كَانَ زَهُوقٗا (81) وَنُنَزِّلُ
          مِنَ ٱلۡقُرۡءَانِ مَا هُوَ شِفَآءٞ وَرَحۡمَةٞ لِّلۡمُؤۡمِنِينَ وَلَا
          يَزِيدُ ٱلظَّٰلِمِينَ إِلَّا خَسَارٗا (82) وَإِذَآ أَنۡعَمۡنَا عَلَى
          ٱلۡإِنسَٰنِ أَعۡرَضَ وَنَـَٔا بِجَانِبِهِۦ وَإِذَا مَسَّهُ ٱلشَّرُّ
          كَانَ يَـُٔوسٗا (83) قُلۡ كُلّٞ يَعۡمَلُ عَلَىٰ شَاكِلَتِهِۦ
          فَرَبُّكُمۡ أَعۡلَمُ بِمَنۡ هُوَ أَهۡدَىٰ سَبِيلٗا (84)
          وَيَسۡـَٔلُونَكَ عَنِ ٱلرُّوحِۖ قُلِ ٱلرُّوحُ مِنۡ أَمۡرِ رَبِّي
          وَمَآ أُوتِيتُم مِّنَ ٱلۡعِلۡمِ إِلَّا قَلِيلٗا (85) وَلَئِن شِئۡنَا
          لَنَذۡهَبَنَّ بِٱلَّذِيٓ أَوۡحَيۡنَآ إِلَيۡكَ ثُمَّ لَا تَجِدُ لَكَ
          بِهِۦ عَلَيۡنَا وَكِيلًا (86) إِلَّا رَحۡمَةٗ مِّن رَّبِّكَۚ إِنَّ
          فَضۡلَهُۥ كَانَ عَلَيۡكَ كَبِيرٗا (87) قُل لَّئِنِ ٱجۡتَمَعَتِ
          ٱلۡإِنسُ وَٱلۡجِنُّ عَلَىٰٓ أَن يَأۡتُواْ بِمِثۡلِ هَٰذَا ٱلۡقُرۡءَانِ
          لَا يَأۡتُونَ بِمِثۡلِهِۦ وَلَوۡ كَانَ بَعۡضُهُمۡ لِبَعۡضٖ ظَهِيرٗا
          (88) وَلَقَدۡ صَرَّفۡنَا لِلنَّاسِ فِي هَٰذَا ٱلۡقُرۡءَانِ مِن كُلِّ
          مَثَلٖ فَأَبَىٰٓ أَكۡثَرُ ٱلنَّاسِ إِلَّا كُفُورٗا (89) وَقَالُواْ لَن
          نُّؤۡمِنَ لَكَ حَتَّىٰ تَفۡجُرَ لَنَا مِنَ ٱلۡأَرۡضِ يَنۢبُوعًا (90)
          أَوۡ تَكُونَ لَكَ جَنَّةٞ مِّن نَّخِيلٖ وَعِنَبٖ فَتُفَجِّرَ
          ٱلۡأَنۡهَٰرَ خِلَٰلَهَا تَفۡجِيرًا (91) أَوۡ تُسۡقِطَ ٱلسَّمَآءَ
          كَمَا زَعَمۡتَ عَلَيۡنَا كِسَفًا أَوۡ تَأۡتِيَ بِٱللَّهِ
          وَٱلۡمَلَٰٓئِكَةِ قَبِيلًا (92) أَوۡ يَكُونَ لَكَ بَيۡتٞ مِّن زُخۡرُفٍ
          أَوۡ تَرۡقَىٰ فِي ٱلسَّمَآءِ وَلَن نُّؤۡمِنَ لِرُقِيِّكَ حَتَّىٰ
          تُنَزِّلَ عَلَيۡنَا كِتَٰبٗا نَّقۡرَؤُهُۥۗ قُلۡ سُبۡحَانَ رَبِّي هَلۡ
          كُنتُ إِلَّا بَشَرٗا رَّسُولٗا (93) وَمَا مَنَعَ ٱلنَّاسَ أَن
          يُؤۡمِنُوٓاْ إِذۡ جَآءَهُمُ ٱلۡهُدَىٰٓ إِلَّآ أَن قَالُوٓاْ أَبَعَثَ
          ٱللَّهُ بَشَرٗا رَّسُولٗا (94) قُل لَّوۡ كَانَ فِي ٱلۡأَرۡضِ
          مَلَٰٓئِكَةٞ يَمۡشُونَ مُطۡمَئِنِّينَ لَنَزَّلۡنَا عَلَيۡهِم مِّنَ
          ٱلسَّمَآءِ مَلَكٗا رَّسُولٗا (95) قُلۡ كَفَىٰ بِٱللَّهِ شَهِيدَۢا
          بَيۡنِي وَبَيۡنَكُمۡۚ إِنَّهُۥ كَانَ بِعِبَادِهِۦ خَبِيرَۢا بَصِيرٗا
          (96) وَمَن يَهۡدِ ٱللَّهُ فَهُوَ ٱلۡمُهۡتَدِۖ وَمَن يُضۡلِلۡ فَلَن
          تَجِدَ لَهُمۡ أَوۡلِيَآءَ مِن دُونِهِۦۖ وَنَحۡشُرُهُمۡ يَوۡمَ
          ٱلۡقِيَٰمَةِ عَلَىٰ وُجُوهِهِمۡ عُمۡيٗا وَبُكۡمٗا وَصُمّٗاۖ
          مَّأۡوَىٰهُمۡ جَهَنَّمُۖ كُلَّمَا خَبَتۡ زِدۡنَٰهُمۡ سَعِيرٗا (97)
          ذَٰلِكَ جَزَآؤُهُم بِأَنَّهُمۡ كَفَرُواْ بِـَٔايَٰتِنَا وَقَالُوٓاْ
          أَءِذَا كُنَّا عِظَٰمٗا وَرُفَٰتًا أَءِنَّا لَمَبۡعُوثُونَ خَلۡقٗا
          جَدِيدًا (98) ۞أَوَ لَمۡ يَرَوۡاْ أَنَّ ٱللَّهَ ٱلَّذِي خَلَقَ
          ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ قَادِرٌ عَلَىٰٓ أَن يَخۡلُقَ مِثۡلَهُمۡ
          وَجَعَلَ لَهُمۡ أَجَلٗا لَّا رَيۡبَ فِيهِ فَأَبَى ٱلظَّٰلِمُونَ إِلَّا
          كُفُورٗا (99) قُل لَّوۡ أَنتُمۡ تَمۡلِكُونَ خَزَآئِنَ رَحۡمَةِ
          رَبِّيٓ إِذٗا لَّأَمۡسَكۡتُمۡ خَشۡيَةَ ٱلۡإِنفَاقِۚ وَكَانَ
          ٱلۡإِنسَٰنُ قَتُورٗا (100) وَلَقَدۡ ءَاتَيۡنَا مُوسَىٰ تِسۡعَ
          ءَايَٰتِۭ بَيِّنَٰتٖۖ فَسۡـَٔلۡ بَنِيٓ إِسۡرَٰٓءِيلَ إِذۡ جَآءَهُمۡ
          فَقَالَ لَهُۥ فِرۡعَوۡنُ إِنِّي لَأَظُنُّكَ يَٰمُوسَىٰ مَسۡحُورٗا
          (101) قَالَ لَقَدۡ عَلِمۡتَ مَآ أَنزَلَ هَٰٓؤُلَآءِ إِلَّا رَبُّ
          ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ بَصَآئِرَ وَإِنِّي لَأَظُنُّكَ
          يَٰفِرۡعَوۡنُ مَثۡبُورٗا (102) فَأَرَادَ أَن يَسۡتَفِزَّهُم مِّنَ
          ٱلۡأَرۡضِ فَأَغۡرَقۡنَٰهُ وَمَن مَّعَهُۥ جَمِيعٗا (103) وَقُلۡنَا مِنۢ
          بَعۡدِهِۦ لِبَنِيٓ إِسۡرَٰٓءِيلَ ٱسۡكُنُواْ ٱلۡأَرۡضَ فَإِذَا جَآءَ
          وَعۡدُ ٱلۡأٓخِرَةِ جِئۡنَا بِكُمۡ لَفِيفٗا (104) وَبِٱلۡحَقِّ
          أَنزَلۡنَٰهُ وَبِٱلۡحَقِّ نَزَلَۗ وَمَآ أَرۡسَلۡنَٰكَ إِلَّا
          مُبَشِّرٗا وَنَذِيرٗا (105) وَقُرۡءَانٗا فَرَقۡنَٰهُ لِتَقۡرَأَهُۥ
          عَلَى ٱلنَّاسِ عَلَىٰ مُكۡثٖ وَنَزَّلۡنَٰهُ تَنزِيلٗا (106) قُلۡ
          ءَامِنُواْ بِهِۦٓ أَوۡ لَا تُؤۡمِنُوٓاْۚ إِنَّ ٱلَّذِينَ أُوتُواْ
          ٱلۡعِلۡمَ مِن قَبۡلِهِۦٓ إِذَا يُتۡلَىٰ عَلَيۡهِمۡ يَخِرُّونَۤ
          لِلۡأَذۡقَانِۤ سُجَّدٗاۤ (107) وَيَقُولُونَ سُبۡحَٰنَ رَبِّنَآ إِن
          كَانَ وَعۡدُ رَبِّنَا لَمَفۡعُولٗا (108) وَيَخِرُّونَ لِلۡأَذۡقَانِ
          يَبۡكُونَ وَيَزِيدُهُمۡ خُشُوعٗا۩ (109) قُلِ ٱدۡعُواْ ٱللَّهَ أَوِ
          ٱدۡعُواْ ٱلرَّحۡمَٰنَۖ أَيّٗا مَّا تَدۡعُواْ فَلَهُ ٱلۡأَسۡمَآءُ
          ٱلۡحُسۡنَىٰۚ وَلَا تَجۡهَرۡ بِصَلَاتِكَ وَلَا تُخَافِتۡ بِهَا
          وَٱبۡتَغِ بَيۡنَ ذَٰلِكَ سَبِيلٗا (110) وَقُلِ ٱلۡحَمۡدُ لِلَّهِ
          ٱلَّذِي لَمۡ يَتَّخِذۡ وَلَدٗا وَلَمۡ يَكُن لَّهُۥ شَرِيكٞ فِي
          ٱلۡمُلۡكِ وَلَمۡ يَكُن لَّهُۥ وَلِيّٞ مِّنَ ٱلذُّلِّۖ وَكَبِّرۡهُ
          تَكۡبِيرَۢا (111)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default Seventeen;
