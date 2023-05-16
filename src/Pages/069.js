import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const SixtyNine = () => {
  return (
    <div>
      <Helmet>
        <title>069 - سورة الحاقة</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الحاقة</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          ٱلۡحَآقَّةُ (1) مَا ٱلۡحَآقَّةُ (2) وَمَآ أَدۡرَىٰكَ مَا
          ٱلۡحَآقَّةُ (3) كَذَّبَتۡ ثَمُودُ وَعَادُۢ بِٱلۡقَارِعَةِ (4)
          فَأَمَّا ثَمُودُ فَأُهۡلِكُواْ بِٱلطَّاغِيَةِ (5) وَأَمَّا عَادٞ
          فَأُهۡلِكُواْ بِرِيحٖ صَرۡصَرٍ عَاتِيَةٖ (6) سَخَّرَهَا عَلَيۡهِمۡ
          سَبۡعَ لَيَالٖ وَثَمَٰنِيَةَ أَيَّامٍ حُسُومٗاۖ فَتَرَى ٱلۡقَوۡمَ
          فِيهَا صَرۡعَىٰ كَأَنَّهُمۡ أَعۡجَازُ نَخۡلٍ خَاوِيَةٖ (7) فَهَلۡ
          تَرَىٰ لَهُم مِّنۢ بَاقِيَةٖ (8) وَجَآءَ فِرۡعَوۡنُ وَمَن قَبۡلَهُۥ
          وَٱلۡمُؤۡتَفِكَٰتُ بِٱلۡخَاطِئَةِ (9) فَعَصَوۡاْ رَسُولَ رَبِّهِمۡ
          فَأَخَذَهُمۡ أَخۡذَةٗ رَّابِيَةً (10) إِنَّا لَمَّا طَغَا ٱلۡمَآءُ
          حَمَلۡنَٰكُمۡ فِي ٱلۡجَارِيَةِ (11) لِنَجۡعَلَهَا لَكُمۡ تَذۡكِرَةٗ
          وَتَعِيَهَآ أُذُنٞ وَٰعِيَةٞ (12) فَإِذَا نُفِخَ فِي ٱلصُّورِ
          نَفۡخَةٞ وَٰحِدَةٞ (13) وَحُمِلَتِ ٱلۡأَرۡضُ وَٱلۡجِبَالُ فَدُكَّتَا
          دَكَّةٗ وَٰحِدَةٗ (14) فَيَوۡمَئِذٖ وَقَعَتِ ٱلۡوَاقِعَةُ (15)
          وَٱنشَقَّتِ ٱلسَّمَآءُ فَهِيَ يَوۡمَئِذٖ وَاهِيَةٞ (16) وَٱلۡمَلَكُ
          عَلَىٰٓ أَرۡجَآئِهَاۚ وَيَحۡمِلُ عَرۡشَ رَبِّكَ فَوۡقَهُمۡ يَوۡمَئِذٖ
          ثَمَٰنِيَةٞ (17) يَوۡمَئِذٖ تُعۡرَضُونَ لَا تَخۡفَىٰ مِنكُمۡ خَافِيَةٞ
          (18) فَأَمَّا مَنۡ أُوتِيَ كِتَٰبَهُۥ بِيَمِينِهِۦ فَيَقُولُ هَآؤُمُ
          ٱقۡرَءُواْ كِتَٰبِيَهۡ (19) إِنِّي ظَنَنتُ أَنِّي مُلَٰقٍ حِسَابِيَهۡ
          (20) فَهُوَ فِي عِيشَةٖ رَّاضِيَةٖ (21) فِي جَنَّةٍ عَالِيَةٖ (22)
          قُطُوفُهَا دَانِيَةٞ (23) كُلُواْ وَٱشۡرَبُواْ هَنِيٓـَٔۢا بِمَآ
          أَسۡلَفۡتُمۡ فِي ٱلۡأَيَّامِ ٱلۡخَالِيَةِ (24) وَأَمَّا مَنۡ أُوتِيَ
          كِتَٰبَهُۥ بِشِمَالِهِۦ فَيَقُولُ يَٰلَيۡتَنِي لَمۡ أُوتَ كِتَٰبِيَهۡ
          (25) وَلَمۡ أَدۡرِ مَا حِسَابِيَهۡ (26) يَٰلَيۡتَهَا كَانَتِ
          ٱلۡقَاضِيَةَ (27) مَآ أَغۡنَىٰ عَنِّي مَالِيَهۡۜ (28) هَلَكَ عَنِّي
          سُلۡطَٰنِيَهۡ (29) خُذُوهُ فَغُلُّوهُ (30) ثُمَّ ٱلۡجَحِيمَ صَلُّوهُ
          (31) ثُمَّ فِي سِلۡسِلَةٖ ذَرۡعُهَا سَبۡعُونَ ذِرَاعٗا فَٱسۡلُكُوهُ
          (32) إِنَّهُۥ كَانَ لَا يُؤۡمِنُ بِٱللَّهِ ٱلۡعَظِيمِ (33) وَلَا
          يَحُضُّ عَلَىٰ طَعَامِ ٱلۡمِسۡكِينِ (34) فَلَيۡسَ لَهُ ٱلۡيَوۡمَ
          هَٰهُنَا حَمِيمٞ (35) وَلَا طَعَامٌ إِلَّا مِنۡ غِسۡلِينٖ (36) لَّا
          يَأۡكُلُهُۥٓ إِلَّا ٱلۡخَٰطِـُٔونَ (37) فَلَآ أُقۡسِمُ بِمَا
          تُبۡصِرُونَ (38) وَمَا لَا تُبۡصِرُونَ (39) إِنَّهُۥ لَقَوۡلُ رَسُولٖ
          كَرِيمٖ (40) وَمَا هُوَ بِقَوۡلِ شَاعِرٖۚ قَلِيلٗا مَّا تُؤۡمِنُونَ
          (41) وَلَا بِقَوۡلِ كَاهِنٖۚ قَلِيلٗا مَّا تَذَكَّرُونَ (42) تَنزِيلٞ
          مِّن رَّبِّ ٱلۡعَٰلَمِينَ (43) وَلَوۡ تَقَوَّلَ عَلَيۡنَا بَعۡضَ
          ٱلۡأَقَاوِيلِ (44) لَأَخَذۡنَا مِنۡهُ بِٱلۡيَمِينِ (45) ثُمَّ
          لَقَطَعۡنَا مِنۡهُ ٱلۡوَتِينَ (46) فَمَا مِنكُم مِّنۡ أَحَدٍ عَنۡهُ
          حَٰجِزِينَ (47) وَإِنَّهُۥ لَتَذۡكِرَةٞ لِّلۡمُتَّقِينَ (48) وَإِنَّا
          لَنَعۡلَمُ أَنَّ مِنكُم مُّكَذِّبِينَ (49) وَإِنَّهُۥ لَحَسۡرَةٌ عَلَى
          ٱلۡكَٰفِرِينَ (50) وَإِنَّهُۥ لَحَقُّ ٱلۡيَقِينِ (51) فَسَبِّحۡ
          بِٱسۡمِ رَبِّكَ ٱلۡعَظِيمِ (52)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default SixtyNine;