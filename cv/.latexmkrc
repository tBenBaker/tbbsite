use File::Basename;
my $dir = dirname(__FILE__);

$pdf_mode = 1;
$pdflatex = 'pdflatex -interaction=nonstopmode -synctex=1 -halt-on-error %O %S';
$out_dir  = 'build';

END {
    my $src_assets       = "$dir/../src/assets";
    my $bakerintel_assets = "$ENV{HOME}/bakerintel/assets";

    if (-e "$dir/build/cv.pdf") {
        system("cp", "$dir/build/cv.pdf", "$src_assets/CV.pdf");
    }
    if (-e "$dir/build/cv_consult.pdf") {
        system("cp", "$dir/build/cv_consult.pdf", "$src_assets/CV_consult.pdf");
        if (-d $bakerintel_assets) {
            system("cp", "$dir/build/cv_consult.pdf", "$bakerintel_assets/CV_consult.pdf");
        } else {
            warn "latexmkrc: skipping bakerintel copy, no such dir: $bakerintel_assets\n";
        }
    }
}
