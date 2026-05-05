$pdf_mode = 1;
$pdflatex = 'pdflatex -interaction=nonstopmode -synctex=1 -halt-on-error %O %S';

$out_dir = 'build';
$jobname = 'CV';

END {
    my $built = "$out_dir/$jobname.pdf";
    my $dest  = "../src/assets/$jobname.pdf";
    if (-e $built) {
        system("cp", $built, $dest);
    }
}
