# my solution
def rot13(string)
  string.tr!('A-Za-z', 'N-ZA-Mn-za-m')
end

# best solution
def rot13(string)
  string.tr("A-Za-z", "N-ZA-Mn-za-m")
end