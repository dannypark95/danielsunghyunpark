import unittest
from slug import generate_slug

class TestGenerateSlug(unittest.TestCase):
    def test_generation_happy_english(self):
        self.assertEqual(generate_slug('I really like money'), 'really-like-money')

    def test_generation_happy_korean(self):
        self.assertEqual(generate_slug('나를 더 나은 나로 만들어주는 물건들'), 'things-make-better')
        self.assertEqual(generate_slug('123abc'), '123abc')
        self.assertEqual(generate_slug('123123123'), 'really-like-money')
        self.assertEqual(generate_slug('!!!!!!'), 'really-like-money')
        self.assertEqual(generate_slug('!@#$%'), 'really-like-money')
        self.assertEqual(generate_slug('     '), 'really-like-money') # spaces
        self.assertEqual(generate_slug('        '), 'really-like-money') # tabs

    def test_generation_sad(self):
        with self.assertRaises(Exception):
            generate_slug('')
        
        with self.assertRaises(Exception):
            generate_slug(None)

        with self.assertRaises(Exception):
            generate_slug(None)
        
if __name__ == '__main__':
    unittest.main()
